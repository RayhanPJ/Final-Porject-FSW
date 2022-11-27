import React from "react";
import FormTiket from "./FormTiket";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import FormInfoTiket from "./FormInfoTiket";

const Main = () => {
  return (
    <div>
      <FormTiket />
      <FormInfoTiket />
      <AboutUs/>
      <Testimonial />
    </div>
  );
};

export default Main;
