import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import logo from "../assets/brand/logo.png";
import NavItem from "./NavItem";

// sidebar nav config
interface ISidebar {
  nav: any;
}
const AppSidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state: ISidebar) => state.nav.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <img src={logo} alt="" />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <NavItem />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
      />
    </CSidebar>
  );
};

export default memo(AppSidebar);
