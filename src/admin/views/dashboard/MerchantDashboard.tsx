import { cilChartPie } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCol, CRow, CWidgetStatsF } from "@coreui/react";
import DashboardService from "../../../services/api/DashboardService";
import useHooks from "../../../utils/useHooks";

const MerchantDashboard = () => {
  const { data } = useHooks(DashboardService.getStats);
  console.log(data);
  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total Product"
            value={data?.totalProduct}
          />
        </CCol>
        <CCol xs={6}>
          <CWidgetStatsF
            className="mb-3"
            color="info"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total Order"
            value={data?.totalOrder}
          />
        </CCol>
      </CRow>
    </>
  );
};

export default MerchantDashboard;
