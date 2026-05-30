import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

export default function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#root"),
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <RouterProvider router={router} />;
}
