import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { foodsService } from "../../../../services";
import { IFormData } from "../../../../types";

interface IProps {
  id: string | undefined;
  visible: boolean;
  setVisible: any;
}

export default function EditFoodItem({ id, visible, setVisible }: IProps) {
  const [formData, setFormData] = useState<IFormData>({} as IFormData);
  const [file, setFile] = useState<string>("");
  const [imgData, setImgData] = useState(null);
  const [data, setData] = useState({});

  const handleOnChange = (e: any): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onChangePicture = (e: any) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // @ts-ignore
        setImgData(reader?.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit = (e: any) => {
    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("price", formData.price);
    newFormData.append("image", file);
    newFormData.append("type", formData.type);
    newFormData.append("rating", formData.rating);
    newFormData.append("category", formData.category);
    newFormData.append("description", formData.description);
  };

  useEffect(() => {
    foodsService.getFoodItemByID(id).then((data) => {
      setData(data);
    });
  }, [id]);
  console.log(data);
  return (
    <div className="container">
      <CModal
        size="lg"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Edit FoodItem</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CRow>
            <CForm className="row g-5 p-4 m-auto d-flex justify-content-center bg-light align-items-center ">
              <CRow className="add-food-reverse">
                <CCol sm={12} lg={6} className="mt-5">
                  <CRow className="g-3">
                    <CCol md={6}>
                      <CFormLabel>Name</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="name"
                        type="text"
                        defaultValue="name"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>Price</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="price"
                        type="text"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>size</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="type"
                        type="text"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>category</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="category"
                        type="text"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>rating</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="rating"
                        type="text"
                      />
                    </CCol>

                    <CCol xs={12}>
                      <CFormLabel>Description</CFormLabel>
                      <textarea
                        onChange={handleOnChange}
                        className="form-control"
                        name="description"
                      ></textarea>
                    </CCol>
                  </CRow>
                </CCol>
                <CCol sm={12} lg={6} className="m-auto">
                  <CCard className="w-100">
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
            </CForm>
          </CRow>
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>

          <CButton onClick={onSubmit} type="button">
            {/* {loading ? "Loading..." : "Save changing"} */}
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}
