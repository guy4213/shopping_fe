import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StoreContext } from "../main";

export const Header = observer(() => {
  const store = useContext(StoreContext);

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-2xl font-bold mb-1">🛒 רשימת קניות</h1>
        <h2 className="text-lg">
          סה"כ: <span className="font-semibold">{store.totalItems}</span> מוצרים בסל
        </h2>
      </div>
    </header>
  );
});
