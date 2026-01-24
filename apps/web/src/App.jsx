import LocomotiveScroll from "locomotive-scroll";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();
  return <RouterProvider router={router} />;
}