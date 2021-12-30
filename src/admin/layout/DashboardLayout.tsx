import AppContent from "../components/AppContent";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import "../scss/style.scss";

export default function DashboardLayout() {
  return (
    <div>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    </div>
  );
}
