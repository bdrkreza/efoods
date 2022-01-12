import { useSelector } from "react-redux";
import { AppState } from "../../services/redux/stores";
import { IFoodItem } from "../../types";
import MenuItemsCart from "./MenuItemsCart";

export default function MenuItems() {
  const { data, loading } = useSelector((state: AppState) => state.food);
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
              berger
            </a>
            <a href="#" className="btn btn-outline-secondary btn-lg border">
              Pizza
            </a>
            <a href="#" className="btn btn-outline-secondary btn-lg border">
              juice
            </a>
          </div>
        </div>
      </div>
      {loading && <div>.......isLoading</div>}
      {!loading && (
        <div className="row align-middle">
          {data?.map((data: IFoodItem) => (
            <MenuItemsCart data={data} key={data._id} />
          ))}
        </div>
      )}
    </div>
  );
}
