import type { Dispatch } from "react";
import { OrderActions } from "../reducers/order-reducer";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>;
};

export default function TipPercentageForm({ dispatch }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl">Propinas</h3>
      <form action="">
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              onChange={(e) => dispatch({ type: "add-tip", payload: { value: +e.target.value } })}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
