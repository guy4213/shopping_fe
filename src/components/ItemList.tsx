import  { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { StoreContext } from "../main";
import type { CartItem } from "../types";

// שינוי 1: הגדרת טיפוס ייעודי לפריט שמוצג ברשימה
// זהו שילוב של CartItem עם התוספת של categoryName.
type DisplayItem = CartItem & { categoryName: string };

export const ItemList = observer(() => {
  const store = useContext(StoreContext);
  
  // שינוי 2: הגדרה מפורשת של הטיפוס של items
  const items: DisplayItem[] = store.itemsWithCategoryNames;

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState({ name: "", quantity: 1 });

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  // שינוי 3: עדכון הטיפוס של הפרמטר item
  const handleEditClick = (item: DisplayItem) => {
    setEditingId(item.id!);
    setEditValues({ name: item.name, quantity: item.quantity });
  };

  const handleSaveClick = (itemId: number) => {
    store.updateItem(itemId, editValues.name, Number(editValues.quantity));
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <div className="max-w-md w-full mx-auto mt-6 px-4 sm:px-6 lg:px-0" dir="rtl">
      <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
        <h2 className="text-xl font-bold text-center mb-4 text-gray-800">
          📋 רשימת פריטים ({totalItems} סה״כ פריטים)
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center">אין פריטים ברשימה</p>
        ) : (
          <ul className="space-y-4">
            {items.map((item: DisplayItem) => ( // הוספת טיפוס גם כאן לקריאות
              <li key={item.id} className="bg-gray-50 border rounded-xl p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                {editingId === item.id ? (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
                    <input
                      type="text"
                      className="flex-1 p-2 border rounded text-right"
                      value={editValues.name}
                      // שינוי 4: הגדרת טיפוס לאירוע e
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEditValues({ ...editValues, name: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      min="1"
                      className="w-20 p-2 border rounded text-right"
                      value={editValues.quantity}
                      // שינוי 4: הגדרת טיפוס לאירוע e
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEditValues({ ...editValues, quantity: Number(e.target.value) })
                      }
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleSaveClick(item.id!)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                      >
                        שמור
                      </button>
                      <button
                        onClick={handleCancel}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                      >
                        בטל
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                    <div>
                      <p className="font-medium text-gray-800">
                        {item.name} ({item.quantity})
                      </p>
                      <p className="text-sm text-gray-500">{item.categoryName}</p>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      <button
                        onClick={() => handleEditClick(item)}
                        className="text-blue-600 hover:underline"
                      >
                        ערוך
                      </button>
                      <button
                        onClick={() => store.removeItem(item.id!)}
                        className="text-red-600 hover:underline"
                      >
                        מחק
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});