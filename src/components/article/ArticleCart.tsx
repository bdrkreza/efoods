import { Link } from "react-router-dom";
import { IArticle } from "../../types";
import imageUrl from "../../utils/getImageUrl";

interface IProps {
  data: IArticle;
}

export default function ArticleCart({ data }: IProps) {
  return (
    <div>
      <Link to={`/article/${data._id}`}>
        <h1>{data.name}</h1>
        <img className="w-25 h-25" src={imageUrl(data.image)} alt="" />
      </Link>
    </div>
  );
}
