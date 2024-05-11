import React from "react";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/HomeServices";
import Contactme from "../Components/Contactme/Contactme";
import Blogs from "../Components/Blogs/Blogs";
import About from "../Components/About/About";
import Header from "../Components/Headers/Header";
export default function HomePage() {
  return (
    <>
      <Header bgColor="black" />
      <Home />
      <Services />
      <About />
      <Contactme />
      <Blogs />
    </>
  );
}
