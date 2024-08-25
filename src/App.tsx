import { useEffect, useReducer, useState } from "react";
import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import type { MenuItem as MenuItemType } from "./types";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const [data, setData] = useState<MenuItemType[]>([]);

  const [state, dispatch] = useReducer(orderReducer, initialState);

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
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />
              <TipPercentageForm dispatch={dispatch} />
              <OrderTotals order={state.order} tip={state.tip} dispatch={dispatch} />
            </>
          ) : (
            <p className="text-center"> La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
