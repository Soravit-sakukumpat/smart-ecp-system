import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Setting from "../pages/setting/setting";
import History from "../pages/history/history";
import OperationOutputTracking from "../pages/trackingdata/operationTracking";
import ParameterMonitoring from "../pages/parameter/parameterMonitor";
import ChemicalUsageMonitoring from "../pages/chemicalUsage/chemicalUsage";
import EcpTimeAlert from "../pages/ecpTimeAlert/ecpTimeAlert";
import IncomingWater from "../pages/incomingwater/incomingwater";


const AppRoutes = () => {
    return (
      <Routes>
        {/* Layout ครอบทุกหน้า */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="history" element={<History />} />
          <Route path="tracking" element={<OperationOutputTracking />} />
          <Route path="parameter" element={<ParameterMonitoring />} />
          <Route path="chemicalusage" element={<ChemicalUsageMonitoring />} />
          <Route path="ecptimealert" element={<EcpTimeAlert />} />
          <Route path="incomingwater" element={<IncomingWater />} />
          <Route path="settings" element={<Setting />} />
        </Route>
      </Routes>
    );
  };

export default AppRoutes;