import { IFoodItem, IFormData } from "../../types";
import requests from "./httpService";

class FoodItemService {
  getFoodItem(): Promise<IFoodItem[]> {
    return requests.get("/foodItem");
  }

  FoodItem(): Promise<IFoodItem[]> {
    return requests.get("/foodItem");
  }

  getFoodItemByID(id: string | undefined): Promise<IFoodItem> {
    return requests.get(`/foodItem/${id}`);
  }

  deleteFoodItem(id: any): Promise<IFoodItem> {
    return requests.delete(`/foodItem/${id}`);
  }

  PostFoodItem(body: {}): Promise<IFormData> {
    return requests.post("/foodItem", body);
  }
}

export default new FoodItemService();
