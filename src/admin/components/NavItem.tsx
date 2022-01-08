import { cilSpeedometer } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CBadge, CNavGroup, CNavLink, CSidebarNav } from "@coreui/react";
import { NavLink } from "react-router-dom";

export default function NavItem() {
  return (
    <>
      <CSidebarNav>
        <h4>
          <CNavLink to="/dashboard" component={NavLink}>
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            Dashboard
          </CNavLink>
        </h4>

        <CNavLink to="orderList" component={NavLink}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Order List
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavLink>

        <CNavLink to="analytics" component={NavLink}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Analytics
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavLink>

        <CNavLink to="customer" component={NavLink}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Customer
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavLink>

        <CNavLink to="review" component={NavLink}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Reviews
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavLink>

        <CNavGroup toggler=".................Foods">
          <CNavLink to="addFoodItem" component={NavLink}>
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            AddFoodItem
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavLink>

          <CNavLink to="foodItemList" component={NavLink}>
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            FoodItemList
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavLink>

          <CNavLink to="foodItemDetails" component={NavLink}>
            <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
            FoodItemDetails
            <CBadge color="primary ms-auto">NEW</CBadge>
          </CNavLink>
        </CNavGroup>

        <CNavLink to="calendar" component={NavLink}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Calendar
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavLink>

        <CNavLink to="chat" component={NavLink}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Chat
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavLink>

        <CNavLink to="wallet" component={NavLink}>
          <CIcon customClassName="nav-icon" icon={cilSpeedometer} />
          Wallet
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavLink>
      </CSidebarNav>
    </>
  );
}
