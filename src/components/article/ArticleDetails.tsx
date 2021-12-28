import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import productService from "../../services/api/productService";
import { addToCart } from "../../services/redux/actionCreator/cartAction";
import { IProduct } from "../../types";
import imageUrl from "../../utils/getImageUrl";
import useHooks from "../../utils/useHooks";
type Params = {
  Id: string;
};
export default function ArticleDetails() {
  const { Id } = useParams<Params>();

  const getProduct = useCallback(() => {
    return productService.getProductByID(Id);
  }, [Id]);

  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError, error } =
    useHooks<IProduct>(getProduct);

  console.log(data);
  const { name, image, price } = (data || {}) as IProduct;
  return (
    <div className="mt-5">
      {isLoading && <h1>Is Loading .....</h1>}

      {isSuccess && (
        <div>
          <img src={imageUrl(data ? image : "")} alt="" />
          <h1>{name}</h1>
          <h1>{price}</h1>
        </div>
      )}
      {isError && <h1>{error}</h1>}

      <button onClick={() => dispatch(addToCart(data as IProduct))}>
        addToCart
      </button>
    </div>
  );
}
