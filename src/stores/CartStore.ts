// בקובץ CartStore.ts

import { makeAutoObservable } from "mobx";
import type { CartItem, Category } from "../types";

export class CartStore {
  items: CartItem[] = [];
  categories: Category[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  addItem(name: string, categoryId: number) {
    const existing = this.items.find(i => i.name === name && i.categoryId === categoryId);
    if (existing) {
      existing.quantity += 1;
    } else {
      // --- שינוי מרכזי: הוספת ID זמני ---
      // Date.now() יספק מספר ייחודי וגדול מספיק לצרכים שלנו כאן.
      const newItem: CartItem = { id: Date.now(), name, quantity: 1, categoryId };
      this.items.push(newItem);
    }
  }

  // הפעולה הזו לא משתנה
  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  // הפעולה הזו לא משתנה
  get itemsWithCategoryNames() {
    return this.items.map(item => ({
      ...item,
      categoryName:
        this.categories.find(cat => cat.id === item.categoryId)?.name || 'לא ידוע',
    }));
  }

  removeItem(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  updateItem(itemId: number, newName: string, newQuantity: number) {
    const itemToUpdate = this.items.find(item => item.id === itemId);
    if (itemToUpdate) {
      itemToUpdate.name = newName;
      itemToUpdate.quantity = newQuantity;
    }
  }
  
  // --- פעולה חדשה: לעדכן את ה-store עם הנתונים מהשרת ---
  setSavedItems(savedItems: CartItem[]) {
    // דורסים את המערך הקיים עם הפריטים החדשים שקיבלנו מהשרת,
    // אשר עכשיו מכילים את ה-IDs האמיתיים מבסיס הנתונים.
    this.items = savedItems;
  }


  clearCart() {
    this.items = [];
  }

  async saveCart() {
    
    const itemsToSave = this.items.map(({ name, quantity, categoryId }) => ({
      name,
      quantity,
      categoryId,
    }));

    try {
      const response = await fetch('http://localhost:3001/cart', { // נניח שזה הנתיב הנכון
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: itemsToSave }),
      });

      if (!response.ok) {
        throw new Error(`שגיאה בשמירת הסל: ${response.status}`);
      }

      const savedCart = await response.json();
      console.log("הסל נשמר בהצלחה!", savedCart);

      // --- שינוי מרכזי: עדכון ה-Store עם הנתונים החדשים ---
      // ה-savedCart.items מכיל את הפריטים עם ה-ID האמיתי מה-DB
      if (savedCart && savedCart.items) {
          this.setSavedItems(savedCart.items);
      }
      
      return savedCart;
    } catch (error) {
      console.error("שגיאה בעת שמירת הסל:", error);
      throw error;
    }
  }
}

export const cartStore = new CartStore();