import React from "react";
import FormTiket from "./FormTiket";
import Testimonial from "./Testimonial";
import AboutUs from "./AboutUs";
import InfoPenerbangan from "./InfoPenerbangan";

const Main = () => {
  return (
    <div>
      <FormTiket />
      <InfoPenerbangan />
      <AboutUs/>
      <Testimonial />
    </div>
  );
};

export default Main;
