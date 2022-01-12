import { IFoodItem, IFormData } from "../../../types";
import {
  FoodCreateActionTypes,
  FoodGetActionTypes,
  RemoveActionTypes,
} from "../actionType";

export interface FoodCreateRequestAction {
  type: FoodCreateActionTypes.FOOD_CREATE_REQUEST;
}

export interface FoodCreateSuccessAction {
  type: FoodCreateActionTypes.FOOD_CREATE_SUCCESS;
  payload: IFormData;
}

export interface FoodCreateFailureAction {
  type: FoodCreateActionTypes.FOOD_CREATE_FAILURE;
  payload: any;
}

export interface FoodCreateResetAction {
  type: FoodCreateActionTypes.FOOD_CREATE_RESET;
}

// get action Start
export interface FoodGetRequestAction {
  type: FoodGetActionTypes.FOOD_GET_REQUEST;
}

export interface FoodGetSuccessAction {
  type: FoodGetActionTypes.FOOD_GET_SUCCESS;
  payload: IFoodItem[];
}

export interface FoodGetFailureAction {
  type: FoodGetActionTypes.FOOD_GET_FAILURE;
  payload: any;
}

// REMOVE ITEM FROM FOOD DATABASE
export interface RemoveRequest {
  type: RemoveActionTypes.REMOVE_REQUEST;
}

export interface RemoveSuccess {
  type: RemoveActionTypes.REMOVE_SUCCESS;
  payload: IFoodItem;
}

export interface RemoveFailure {
  type: RemoveActionTypes.REMOVE_FAILURE;
  payload: any;
}

export type FoodAction =
  | FoodCreateRequestAction
  | FoodCreateSuccessAction
  | FoodCreateFailureAction
  | FoodCreateResetAction
  | FoodGetRequestAction
  | FoodGetSuccessAction
  | FoodGetFailureAction
  | RemoveRequest
  | RemoveSuccess
  | RemoveFailure;
