import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </>
  );
}
