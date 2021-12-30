import { IProduct } from "../../types";
import ArticleCart from "./ArticleCart";

interface IProps {
  data: IProduct[] | null;
  isLoading: boolean;
}

export default function ArticleB({ data, isLoading }: IProps) {
  return (
    <div>
      {isLoading && <h1>isLoading.......</h1>}
      {!isLoading && (
        <div>
          {data?.slice(5, 10).map((data: IProduct) => (
            <ArticleCart data={data} key={data._id} />
          ))}
        </div>
      )}
    </div>
  );
}
