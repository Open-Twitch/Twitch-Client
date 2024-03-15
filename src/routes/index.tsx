import { AuthPage } from "@/Auth";
import { DashboardPage } from "@/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <DashboardPage />,
    children: [
      {
        path: "setting",
        element: <div>Setting</div>,
      },
      {
        path: "channels",
        element: <div>channels</div>,
      },
      {
        path: "channel/:id",
        element: <div>single channel</div>,
      },
    ],
  },
]);
