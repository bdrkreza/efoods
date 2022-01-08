import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from "@coreui/react";
import { useState } from "react";
export default function AddFoodItem() {
  const [imgData, setImgData] = useState(null);

  const onChangePicture = (e: any) => {
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // @ts-ignore
        setImgData(reader?.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div className="container">
      <CCard>
        <CCardHeader>Add Product</CCardHeader>

        <CCardBody>
          <CRow>
            <CForm className="row g-3 p-5 m-2 d-flex justify-content-center align-items-center">
              <CRow>
                <CCol xs={6}>
                  <CRow>
                    <CCol md={6}>
                      <CFormLabel>Name</CFormLabel>
                      <CFormInput name="name" type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>Price</CFormLabel>
                      <CFormInput
                        name="price"
                        type="text"
                        id="inputPassword4"
                      />
                    </CCol>

                    <CCol xs={12}>
                      <CFormLabel>Description</CFormLabel>
                      <textarea
                        className="form-control"
                        rows={5}
                        name="description"
                        id="exampleFormControlTextarea1"
                      ></textarea>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol xs={5}>
                  <CCard className="w-100 mt-4 ">
                    {/* @ts-ignore */}
                    <CCardImage orientation="top" src={imgData} />
                    <CCardBody className="text-center">
                      <CCardTitle>Image Upload</CCardTitle>
                    </CCardBody>
                    <div className="file-Upload">
                      <div className="file btn w-100 btn-primary">
                        Upload
                        <input
                          onChange={onChangePicture}
                          type="file"
                          name="file"
                        />
                      </div>
                    </div>
                  </CCard>
                </CCol>
              </CRow>

              <CCol xs={12}>
                <CButton type="button">Add Product</CButton>
              </CCol>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
}
