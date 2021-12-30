import CIcon from "@coreui/icons-react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler
} from "@coreui/react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import logo from "../assets/brand/logo.png";
import { sygnet } from "../assets/brand/sygnet";
// sidebar nav config


const AppSidebar = () => {
  const dispatch = useDispatch();

  const sidebarShow = useSelector((state) => state.nav.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img src={logo} alt="" />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
     
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
      />
    </CSidebar>
  );
};

export default memo(AppSidebar);
