import { FoodCreateActionTypes, RemoveActionTypes } from "../actionType";
import { IFoodItem, IFormData } from "./../../../types";
import { FoodAction } from "./../actions/foodAction";
import { FoodGetActionTypes } from "./../actionType";

interface IFoodState {
  data: IFormData | null;
  status: "idle" | "pending" | "success" | "error";
  error: null | string;
  loading: boolean;
}

const initialState: IFoodState = {
  data: null,
  status: "idle",
  loading: false,
  error: "",
};

export const foodReducer = (
  state: IFoodState = initialState,
  action: FoodAction
): IFoodState => {
  switch (action.type) {
    case FoodCreateActionTypes.FOOD_CREATE_REQUEST:
      return {
        data: null,
        loading: true,
        status: "pending",
        error: null,
      };
    case FoodCreateActionTypes.FOOD_CREATE_SUCCESS:
      return {
        data: action.payload,
        status: "success",
        loading: false,
        error: null,
      };
    case FoodCreateActionTypes.FOOD_CREATE_FAILURE:
      return {
        data: null,
        loading: false,
        status: "error",
        error: action.payload,
      };
    case FoodCreateActionTypes.FOOD_CREATE_RESET:
      return initialState;
    default:
      return state;
  }
};

interface IFoodListState {
  data: IFoodItem[] | null;
  status: "idle" | "pending" | "success" | "error";
  error: null | string;
  loading: boolean;
}

const initialFoodListState: IFoodListState = {
  data: null,
  status: "idle",
  loading: false,
  error: "",
};

export const foodListReducer = (
  state: IFoodListState = initialFoodListState,
  action: FoodAction
): IFoodListState => {
  switch (action.type) {
    case FoodGetActionTypes.FOOD_GET_REQUEST:
      return {
        data: null,
        status: "idle",
        loading: false,
        error: "",
      };
    case FoodGetActionTypes.FOOD_GET_SUCCESS:
      return {
        data: action.payload,
        status: "success",
        loading: false,
        error: null,
      };

    case FoodGetActionTypes.FOOD_GET_FAILURE:
      return {
        data: null,
        loading: false,
        status: "error",
        error: action.payload,
      };

    default:
      return state;
  }
};

interface FoodDeleteState {
  success?: boolean;
  loading?: boolean;
  error?: any;
}

const initialFoodDeleteState: FoodDeleteState = {
  loading: false,
};

/**
 * Reducer used for deleting a product
 */
export const FoodDeleteReducer = (
  state: FoodDeleteState = initialFoodDeleteState,
  action: FoodAction
) => {
  switch (action.type) {
    case RemoveActionTypes.REMOVE_REQUEST:
      return { loading: true };
    case RemoveActionTypes.REMOVE_SUCCESS:
      return { loading: false, success: true };
    case RemoveActionTypes.REMOVE_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
