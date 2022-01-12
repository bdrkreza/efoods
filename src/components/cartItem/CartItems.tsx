import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../services/redux/actionCreator/cartAction";
import { AppState } from "../../services/redux/stores";
import { IFoodItem } from "../../types";

export default function CartItems() {
  const cart = useSelector((state: AppState) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cart-items-container">
        {cart.map((item: IFoodItem) => (
          <>
            <div className="cart-item">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt="Generic placeholder image"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <button
                    onClick={() => dispatch(removeFromCart(item._id as string))}
                    className="float-end text-black fa-times "
                  >
                    <VscChromeClose />
                  </button>
                  <h5 className="text-primary">{item.name}</h5>
                  <h6>Color: Red</h6>
                  <div className="d-flex align-items-center justify-content-center">
                    <p className="fw-bold mb-0 me-5 mb-5">{item.price}$</p>
                    <div className="d-flex mb-4">
                      <button className="btn btn-primary h-25 me-2">
                        <FaMinus />
                      </button>
                      <div className="form-outline">
                        <input
                          id="form1"
                          min="0"
                          value="1"
                          type="number"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form1">
                          Quantity
                        </label>
                      </div>

                      <button className="btn btn-primary h-25 ms-2">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <hr className="mb-4" />
        <a href="#" className="btn">
          checkout now
        </a>
      </div>
    </>
  );
}
