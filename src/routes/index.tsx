import { AuthPage } from "@/Auth";
import { ChannelView, Channels, DashboardPage, Settings } from "@/Dashboard";
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
        path: "settings",
        element: <Settings/>,
      },
      {
        path: "channels",
        element: <Channels />,
      },
      {
        path: "channel/:id",
        element: <ChannelView />,
      },
    ],
  },
]);
