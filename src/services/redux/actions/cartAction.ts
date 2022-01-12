import { IFoodItem } from "../../../types";
import { ActionType } from "../actionType";

interface addToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: IFoodItem;
}

interface removeFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: string;
}

interface clearCartAction {
  type: ActionType.CLEAR_CART;
}

export type CartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction;
