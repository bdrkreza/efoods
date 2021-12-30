import { IProduct } from "../../types";
import requests from "./httpService";

class ProductService {
  getProducts(): Promise<IProduct[]> {
    return requests.get("/product");
  }

  getProductByID(id: string | undefined): Promise<IProduct> {
    return requests.get(`/product/${id}`);
  }

  getMerchantsProducts(): Promise<IProduct[]> {
    return requests.get("/merchant/products");
  }

  addProduct(body: {}): Promise<IProduct> {
    return requests.post("/product/", body);
  }

  updateProduct(id: string, body: {}): Promise<IProduct> {
    return requests.patch(`/product/${id}`, body);
  }

  delete(id: string): Promise<IProduct> {
    return requests.delete(`/product/${id}`);
  }
}

export default new ProductService();
