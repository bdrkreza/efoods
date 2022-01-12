import { IArticle } from "../../types";
import requests from "./httpService";

class ArticleService {
  getArticles(): Promise<IArticle[]> {
    return requests.get("/Articles");
  }

  getArticlesByID(id: string | undefined): Promise<IArticle> {
    return requests.get(`/Articles/${id}`);
  }

  addArticles(body: {}): Promise<IArticle> {
    return requests.post("/Articles/", body);
  }

  updateArticles(id: string, body: {}): Promise<IArticle> {
    return requests.patch(`/Articles/${id}`, body);
  }

  delete(id: string): Promise<IArticle> {
    return requests.delete(`/Articles/${id}`);
  }
}

export default new ArticleService();
