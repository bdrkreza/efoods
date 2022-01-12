import { CAvatar, CCol, CContainer, CRow } from "@coreui/react";
import avatar1 from "../../assets/images/avatars/1.jpg";
import Rating from "./Rating";
export default function Reviews() {
  return (
    <div>
      <CContainer className="px-1 mt-5">
        <CRow xs={{ gutterX: 5 }}>
          <CCol>
            <div className="p-3 border bg-light">
              <div className="d-flex">
                <CAvatar className="w-25" src={avatar1} status="success" />
                <div className="small ms-3">
                  <span>Registered:</span>
                  <br />
                  <span>january-10-10</span>
                </div>
                <div className="ms-auto">
                  <Rating />
                </div>
              </div>
              <div className="mt-5">
                If you re competitor-focused, you have to wait until there is a
                competitor doing something
              </div>
            </div>
          </CCol>
          <CCol>
            <div className="p-3 border bg-light">
              <div className="d-flex">
                <CAvatar className="w-25" src={avatar1} status="success" />
                <div className="small ms-3">
                  <span>Registered:</span>
                  <br />
                  <span>january-10-10</span>
                </div>
                <div className="ms-auto">
                  <Rating />
                </div>
              </div>
              <div className="mt-5">
                If you re competitor-focused, you have to wait until there is a
                competitor doing something
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
