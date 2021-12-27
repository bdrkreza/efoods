import { IProduct } from "../../types";

interface IProps {
  data: IProduct;
}

export default function ArticleCart({ data }: IProps) {
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}
