import { Dispatch } from "react";
import { foodsService } from "../..";
import { IFormData } from "../../../types";
import { FoodAction } from "./../actions/foodAction";
import {
  FoodCreateActionTypes,
  FoodGetActionTypes,
  RemoveActionTypes,
} from "./../actionType";

export const CreateFood = (payload: IFormData) => {
  return (dispatch: Dispatch<FoodAction>) => {
    dispatch({
      type: FoodCreateActionTypes.FOOD_CREATE_REQUEST,
    });
    foodsService
      .PostFoodItem(payload)
      .then((data) => {
        dispatch({
          type: FoodCreateActionTypes.FOOD_CREATE_SUCCESS,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FoodCreateActionTypes.FOOD_CREATE_FAILURE,
          payload: err,
        });
      });
  };
};

export const GetFoodItem = () => {
  return async (dispatch: Dispatch<FoodAction>) => {
    try {
      dispatch({
        type: FoodGetActionTypes.FOOD_GET_REQUEST,
      });

      await foodsService.getFoodItem().then((data) => {
        dispatch({
          type: FoodGetActionTypes.FOOD_GET_SUCCESS,
          payload: data,
        });
      });
    } catch (error) {
      dispatch({
        type: FoodCreateActionTypes.FOOD_CREATE_FAILURE,
        payload: error,
      });
    }
  };
};

export const deleteFoodItem = (id: string) => {
  return async (dispatch: Dispatch<FoodAction>) => {
    try {
      dispatch({
        type: RemoveActionTypes.REMOVE_REQUEST,
      });

      await foodsService.deleteFoodItem(id).then((data) => {
        dispatch({
          type: RemoveActionTypes.REMOVE_SUCCESS,
          payload: data,
        });
      });
    } catch (error) {
      dispatch({
        type: RemoveActionTypes.REMOVE_FAILURE,
        payload: error,
      });
    }
  };
};
