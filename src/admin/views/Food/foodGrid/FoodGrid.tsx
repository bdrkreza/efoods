import { CRow } from "@coreui/react";
import { useSelector } from "react-redux";
import { AppState } from "../../../../services/redux/stores";
import { IFoodItem } from "../../../../types";
import FoodGridCart from "./FoodGridCart";

export default function FoodGrid() {
  const { data } = useSelector((state: AppState) => state.food);

  return (
    <div>
      <CRow>
        {data?.map((data: IFoodItem) => (
          <FoodGridCart data={data} key={data._id} />
        ))}
      </CRow>
    </div>
  );
}
