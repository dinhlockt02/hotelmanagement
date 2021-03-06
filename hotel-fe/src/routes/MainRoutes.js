import MainLayout from "../layout/MainLayout";
import { lazy } from "react";
import Loadable from "../ui-component/Loadable";

const TestPage = Loadable(lazy(() => import("../pages/TestPage")));
const Room = Loadable(lazy(() => import("../pages/Room")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <TestPage />,
    },
    {
      path: "/room",
      element: <Room />,
    },
    {
      path: "/booking/:id",
      element: <TestPage />,
    },
    {
      path: "/payment",
      element: <TestPage />,
    },
    {
      path: "/monthly-report",
      element: <TestPage />,
    },
  ],
};

export default MainRoutes;
