export interface Category {
  id: number;
  name: string;
}

export interface CartItem {
  id?: number|null;
  name: string;
  quantity: number;
  categoryId: number;
}

