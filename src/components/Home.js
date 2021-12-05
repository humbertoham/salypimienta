import React from "react";
import About from "./About";

import Banner from "./Banner";
import Contact from "./ContactUs";
import MenuSec from "./MenuSec";
import Separator from "./Separator";

const Home = () => {
  return (
    <>
      <Banner />
      <MenuSec />
      <Separator />
      <About />

      <Contact />
    </>
  );
};

export default Home;
