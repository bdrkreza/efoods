import { useEffect, useState } from "react";
import { itemData } from "../../services/fakeApi/fakeApi";
import { IItems } from "../../types";
import MenuItemsCart from "./MenuItemsCart";

export default function MenuItems() {
  const [items, setItems] = useState<IItems[]>([]);
  useEffect(() => {
    setItems(itemData);
  }, []);
  return (
    <div className="container mt-5">
      <div className="menu-container">
        <div className="menu-title">
          <div className="d-flex flex-column align-items-center">
            <h1>our best menu</h1>
            <hr className="my-4" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <div className="d-flex justify-content-evenly mt-4">
            <a href="#" className="btn btn-outline-secondary btn-lg border">
              Order Now
            </a>
            <a href="#" className="btn btn-outline-secondary btn-lg border">
              Order Now
            </a>
            <a href="#" className="btn btn-outline-secondary btn-lg border">
              Order Now
            </a>
          </div>
        </div>
      </div>

      <div className="row align-middle">
        {items.slice(1).map((data: IItems) => (
          <MenuItemsCart data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
