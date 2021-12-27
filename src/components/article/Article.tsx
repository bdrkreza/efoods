import { IProduct } from "../../types";
import ArticleCart from "./ArticleCart";

interface IProps {
  data: IProduct[];
}

export default function ArticleB({ data }: IProps) {
  return (
    <div>
      {data.map((data: IProduct) => (
        <ArticleCart data={data} key={data._id} />
      ))}
    </div>
  );
}
