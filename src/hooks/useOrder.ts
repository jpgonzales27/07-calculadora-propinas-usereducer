import { useState } from "react";
import type { MenuItem, OrdenItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrdenItem[]>([]);

  const addItem = (item: MenuItem) => {
    console.log("Agregando...", item);
  };
  return { addItem };
}
