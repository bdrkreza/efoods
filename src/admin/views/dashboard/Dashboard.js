import { cilChartPie } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CCol, CRow, CWidgetStatsF } from '@coreui/react';
import { lazy } from 'react';
import DashboardService from '../../../services/api/DashboardService';
import useHooks from '../../../utils/useHooks';
import WidgetsBrand from '../widgets/WidgetsBrand';

const Widgets =lazy(() =>import('../widgets/Widgets'));
const TrafficWidgets = lazy(() => import('../widgets/TrafficWidgets'))
const UserList = lazy(() => import('../userList/UserList'))
const TrafficAndSales = lazy(() => import('../widgets/TrafficAndSales'))

const Dashboard = () => {
  const { data } = useHooks(DashboardService.getStats);
  return (
    <>
    <Widgets/>

      <CRow>
        <CCol xs={3}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total User"
            value={data?.totalUser}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF
            className="mb-3"
            color="danger"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total Store"
            value={data?.totalStore}
          />
        </CCol>
        <CCol xs={3}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            icon={<CIcon icon={cilChartPie} height={24} />}
            padding={false}
            title="Total Product"
            value={data?.totalProduct}
          />
        </CCol>
        <CCol xs={3}>
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
      <TrafficWidgets/>
      <WidgetsBrand/>
      <TrafficAndSales/>
      <UserList/>
    </>
  );
};

export default Dashboard;
