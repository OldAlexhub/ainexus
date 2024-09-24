import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Signup from "../routes/Signup";
import Jobs from "../routes/Jobs";
import Handbook from "../routes/Handbook";
import EmployeeAnalytics from "../routes/EmployeeAnalytics";
import EmployeeAdvancements from "../routes/EmployeeAdvancements";
import FraudDetection from "../routes/FraudDetection";
import PredictiveAnalytics from "../routes/PredictiveAnalytics";
import SpendingAnalytics from "../routes/SpendingAnalytics";
import Sentiment from "../routes/Sentiment";
import LeadScoring from "../routes/LeadScoring";
import CustomerSegmentationDashboard from "../routes/CustomerSegmentationDashboard";
import ContentCreationAnalyticsDashboard from "../routes/ContentCreationAnalyticsDashboard";
import PredictiveSalesAnalyticsDashboard from "../routes/PredictiveSalesAnalyticsDashboard";
import AdOptimizationDashboard from "../routes/AdOptimizationDashboard";
import DemandForecasting from "../routes/DemandForecasting";
import SupplyChainOptimization from "../routes/SupplyChainOptimization";
import PredictiveMaintenance from "../routes/PredictiveMaintenance";
import ITSecurityMonitoring from "../routes/ITSecurityMonitoring";
import ContractReview from "../routes/ContractReview";
import ComplianceMonitoring from "../routes/ComplianceMonitoring";

const RouteManager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="handbook" element={<Handbook />} />
          <Route path="employeeanalytics" element={<EmployeeAnalytics />} />
          <Route path="fraud" element={<FraudDetection />} />
          <Route path="predictiveanalytics" element={<PredictiveAnalytics />} />
          <Route path="spendinganalytics" element={<SpendingAnalytics />} />
          <Route path="sentiment" element={<Sentiment />} />
          <Route path="lead" element={<LeadScoring />} />
          <Route path="segement" element={<CustomerSegmentationDashboard />} />
          <Route path="sales" element={<PredictiveSalesAnalyticsDashboard />} />
          <Route path="ad" element={<AdOptimizationDashboard />} />
          <Route path="demand" element={<DemandForecasting />} />
          <Route path="supply" element={<SupplyChainOptimization />} />
          <Route path="maintenance" element={<PredictiveMaintenance />} />
          <Route path="it" element={<ITSecurityMonitoring />} />
          <Route path="review" element={<ContractReview />} />
          <Route path="compliance" element={<ComplianceMonitoring />} />

          <Route
            path="content"
            element={<ContentCreationAnalyticsDashboard />}
          />
          <Route
            path="employeeadvancements"
            element={<EmployeeAdvancements />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteManager;
