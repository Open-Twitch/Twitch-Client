import { AuthPage } from "@/Auth";
import { ChannelView, Channels, DashboardPage } from "@/Dashboard";
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
        element: <Channels />,
      },
      {
        path: "channel/:id",
        element: <ChannelView />,
      },
    ],
  },
]);
