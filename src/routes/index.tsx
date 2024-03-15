import { AuthPage } from "@/Auth";
import { DashboardPage } from "@/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/*",
    element: <DashboardPage />,
  },
]);
