import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Approach from "./pages/Approach";
import Project from "./pages/Project";
import Slip from "./pages/Slip";
import SlidesInfo from "./pages/SlideInfo";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

import LocomotiveScroll from "locomotive-scroll";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <Error />,
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/project",
    element: <Project />,
    errorElement: <Error />,
  },
  {
    path: "/slideinfo",
    element: <SlidesInfo />,
    errorElement: <Error />,
  },
  {
    path: "/slip",
    element: <Slip />,
    errorElement: <Error />,
  },
  {
    path: "/approach",
    element: <Approach />,
    errorElement: <Error />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />,
  },
  {
    path: "/userpanel",
    element: <Dashboard text={"user"} />,
    errorElement: <Error />,
  },
  {
    path: "/adminpanel",
    element: <Dashboard text={"admin"} />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <Error />,
  },
]);

function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return <RouterProvider router={router} />;
}

export default App;
