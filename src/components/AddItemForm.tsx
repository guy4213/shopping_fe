import  { useContext, useState, useEffect } from 'react';
import ReactSelect from 'react-select';

import { observer } from 'mobx-react-lite';
import { StoreContext } from '../main';

export const AddItemForm = observer(() => {
  const store = useContext(StoreContext);
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState<number|null>(null);
const options = store.categories.map(c => ({
  value: c.id,
  label: c.name,
}));
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:3001/categories');
        const data = await res.json();
        store.setCategories(data);
      } catch (err) {
        console.error("שגיאה בטעינת קטגוריות:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleAdd = () => {
    if (!name.trim() || !categoryId) return;
    store.addItem(name.trim(), Number(categoryId));
    setName('');
    setCategoryId(null);
  };

  const handleSave = async () => {
    try {
      if (store.items.length === 0) {
        alert("רשימת הקניות ריקה! הוסף פריטים לפני שמירת הסל.");
        return;
      }

      const res = await store.saveCart(); // חשוב: וודא שפונקציה זו מחזירה את `Response`
        alert("הסל נשמר בהצלחה!");
        console.log(res)
        store.clearCart();
     
    } catch (error) {
      console.error("שגיאה בעת שמירת הסל:", error);
      alert("אירעה שגיאה בעת שמירת הסל.");
    }
  };

  return (
    <div className="max-w-md mx-auto my-6 p-4 bg-white rounded shadow">
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="הכנס מוצר"
          className="w-full text-right p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <ReactSelect
        options={options}
        value={options.find(opt => opt.value === Number(categoryId))}
        onChange={selected => setCategoryId(selected!.value!)}
        placeholder="בחר קטגוריה"
        isRtl={true}
        className="text-right"
        classNames={{
          control: () => "p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
          menu: () => "text-right",
        }}
      />
      </div>
      <button
        onClick={handleAdd}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        הוסף
      </button>
      <button
        onClick={handleSave}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        סיים הזמנה
      </button>
    </div>
  );
});
