import { SiBurgerking } from "react-icons/si";
import { useDispatch } from "react-redux";
import { addToCart } from "../../services/redux/actionCreator/cartAction";
import { IFoodItem } from "../../types";
interface IProps {
  data: IFoodItem;
}
export default function MenuItemsCart({ data }: IProps) {
  const { name, image, price, description } = data;
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-md-6 col-lg-4 column">
        <div className="card gr-1 text-white">
          <div className="foods mb-4">
            <img src={image} className="w-100 h-100" alt="" />
          </div>

          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex justify-content-around">
            <h2>${price}.00</h2>
            <div className="common-btn">
              <button
                onClick={() => dispatch(addToCart(data as IFoodItem))}
                className="btn  btn-outline-secondary btn-lg border mt-4"
              >
                AddToCart
              </button>
            </div>
          </div>
          <div className="ico-card">
            <SiBurgerking />
          </div>
        </div>
      </div>
    </>
  );
}
