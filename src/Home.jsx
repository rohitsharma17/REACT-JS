import React from "react";
import web from "../src/Images/img1.jpg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="EAT HEALTHY STAY HEALTHY WITH "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
      <div className="container-fluid ">
       <div className='row'>
       <div className="col-10 mx-auto">
       <h2 className="my-3">
                      Install our Dabba JunKtion App from Playstore 
                  </h2>
                  <div className="mt-3">
                      <a href="" className="btn-get-started ">
                        play store
                     </a>
                    </div>
       </div>
    </div>
 </div>

    </>
  );
};
export default Home;