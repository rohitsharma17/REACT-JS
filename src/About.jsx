import React from "react";
import web from "../src/Images/image2.jpg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;