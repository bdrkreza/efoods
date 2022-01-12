import {
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodItem } from "../../../../services/redux/actionCreator/foodAction";
import { AppState } from "../../../../services/redux/stores";
import { IFoodItem } from "../../../../types";
import EditFoodItem from "../editFoodItem/EditFoodItem";

interface IProps {
  data: IFoodItem;
}

export default function FoodGridCart({ data }: IProps) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { image, description, price, _id } = data;

  const { loading } = useSelector((state: AppState) => state.delete);

  return (
    <>
      <CCard className="mb-3 m-3 p-3 h-auto" style={{ width: "30rem" }}>
        {loading ? <div>this is item is delete</div> : null}
        <CRow className="g-0">
          <CCol md={5}>
            <img className="w-100 h-100 card-img-top" src={image} alt="" />
          </CCol>
          <CCol md={7}>
            <CCardBody>
              <div className="d-flex justify-content-between">
                <CCardTitle>Burger</CCardTitle>
                <CCardTitle className="text-danger">${price}</CCardTitle>
              </div>
              <div className="d-flex justify-content-between">
                <CCardTitle>Qty:1467</CCardTitle>
                <CCardTitle className="text-light bg-success">
                  in Stock
                </CCardTitle>
              </div>
              <CCardText>{description}</CCardText>

              <div className="d-flex justify-content-between">
                <button
                  onClick={() => dispatch(deleteFoodItem(_id as string))}
                  type="button"
                  className="btn btn-danger"
                >
                  Remove
                </button>
                <CButton onClick={() => setVisible(!visible)}>Edit</CButton>
              </div>
              <EditFoodItem
                id={_id}
                visible={visible}
                setVisible={setVisible}
              />
            </CCardBody>
          </CCol>
        </CRow>
      </CCard>
    </>
  );
}
