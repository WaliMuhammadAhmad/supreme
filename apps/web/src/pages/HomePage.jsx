import React from "react";
import Navbar from "../components/Navbar";
import Landingpage from "../components/Landingpage";
import Marquee from "../components/Marquee";
import Featured from "../components/Featured";
import Cards from "../components/Cards";
import Start from "../components/Start";
import Footer from "../components/Footer";
import EyesContainer from "../components/EyesContainer";
import { homePageHero } from "../data/index";

function HomePage() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-zinc-900 text-white'>
      <Navbar user={storedUser} />
      <Landingpage {...homePageHero} />
      <Marquee />
      <EyesContainer />
      <Featured />
      <Start />
      <Cards />
      <Footer />
    </div>
  );
}

export default HomePage;
