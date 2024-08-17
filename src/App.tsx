import { useEffect, useState } from "react";
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import type { MenuItem as MenuItemType } from "./types";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";

function App() {
  const [data, setData] = useState<MenuItemType[]>([]);
  const { order, addItem, removeItem } = useOrder();
  useEffect(() => {
    setData(menuItems);
  }, []);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {data.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem} />
        </div>
      </main>
    </>
  );
}

export default App;
