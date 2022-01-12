import { useCallback } from "react";
import { useParams } from "react-router-dom";
import articleService from "../../services/api/articleService";
import { IArticle } from "../../types";
import imageUrl from "../../utils/getImageUrl";
import useHooks from "../../utils/useHooks";

type Params = {
  Id: string;
};
export default function ArticleDetails() {
  const { Id } = useParams<Params>();

  const getArticle = useCallback(() => {
    return articleService.getArticlesByID(Id);
  }, [Id]);

  const { data, isLoading, isSuccess, isError, error } =
    useHooks<IArticle>(getArticle);

  console.log(data);
  const { name, image, price } = (data || {}) as IArticle;
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

      <button>addToCart</button>
    </div>
  );
}
