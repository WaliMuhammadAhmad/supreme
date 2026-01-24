import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Talk from "./pages/Talk";
import Slip from "./pages/Slip";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import { HOME_ROUTE, SERVICES_ROUTE, WORK_ROUTE, ABOUT_ROUTE, TALK_ROUTE, SLIP_ROUTE, APPROACH_ROUTE, SIGN_IN_ROUTE, SIGN_UP_ROUTE, DASHBOARD_ROUTE, USER_ROUTE, ADMIN_ROUTE} from "./data/routes";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: SERVICES_ROUTE,
    element: <Services />,
    errorElement: <Error />,
  },
  {
    path: WORK_ROUTE,
    element: <Work />,
    errorElement: <Error />,
  },
  {
    path: ABOUT_ROUTE,
    element: <About />,
    errorElement: <Error />,
  },
    {
    path: APPROACH_ROUTE,
    element: <Approach />,
    errorElement: <Error />,
  },
  {
    path: TALK_ROUTE,
    element: <Talk />,
    errorElement: <Error />,
  },
  {
    path: SLIP_ROUTE,
    element: <Slip />,
    errorElement: <Error />,
  },
  {
    path: SIGN_IN_ROUTE,
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: SIGN_UP_ROUTE,
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: DASHBOARD_ROUTE+USER_ROUTE,
    element: <Dashboard text={"user"} />,
    errorElement: <Error />,
  },
  {
    path: DASHBOARD_ROUTE+ADMIN_ROUTE,
    element: <Dashboard text={"admin"} />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <Error />,
  },
]);