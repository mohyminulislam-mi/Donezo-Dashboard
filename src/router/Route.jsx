import { createBrowserRouter } from "react-router";
import DashboardLayout from "../Layouts/DashboardLayout";
import Task from "../pages/Task";
import Analytics from "../pages/Analytics";
import Team from "../pages//Team";
import Calendar from "../pages/Calendar";
import Settings from "../pages/Settings";
import Help from "../pages/Help";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/common/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/tasks", element: <Task /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "team", element: <Team /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/settings", element: <Settings /> },
      { path: "/help", element: <Help /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
