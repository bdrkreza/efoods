import { SiBurgerking } from "react-icons/si";
import { IItems } from "../../types";
interface IProps {
  data: IItems;
}
export default function MenuItemsCart({ data }: IProps) {
  const { name, img, title, price } = data;
  return (
    <>
      <div className="col-md-6 col-lg-4 column">
        <div className="card gr-1 text-white">
          <div className="foods mb-4">
            <img src={img} className="w-100 h-100" alt="" />
          </div>

          <h4>{name}</h4>
          <p>{title}</p>
          <div className="d-flex justify-content-around">
            <h2>${price}.00</h2>
            <div className="common-btn">
              <a
                href="#"
                className="btn  btn-outline-secondary btn-lg border mt-4"
              >
                AddToCart
              </a>
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
