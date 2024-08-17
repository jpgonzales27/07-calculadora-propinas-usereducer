import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: OrderItem["id"];
  placeOrder: () => void;
};

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subTotal = useMemo(() => order.reduce((total, item) => total + item.quantity * item.price, 0), [order]);
  const tipAmount = useMemo(() => subTotal * tip, [subTotal, tip]);
  const total = useMemo(() => subTotal + tipAmount, [subTotal, tipAmount]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subtotal a pagar <span className="font-bold">{formatCurrency(subTotal)}</span>
        </p>
        <p>
          Propina <span className="font-bold">{formatCurrency(tipAmount)} </span>
        </p>
        <p>
          Total a Pagar <span className="font-bold">{formatCurrency(total)} </span>
        </p>
      </div>
      <button
        className="bg-black w-full p-3 text-white uppercase font-bold mt-10 disabled:opacity-10"
        disabled={total === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
