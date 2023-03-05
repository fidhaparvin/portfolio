import React from "react";
import banner from "./banner.png";
import { Carousel } from "antd";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbCertificate } from "react-icons/tb";
import { FaCertificate } from "react-icons/fa";
import { Divider } from "antd";
import { TypeAnimation } from "react-type-animation";

function Banner() {
  const contentStyle = {
    height: "110px",
    color: "#3F3F48",
    lineHeight: "160px",
    textAlign: "center",
    background: "#fff",
    fontWeight: "100",
    fontSize: "1rem",
  };
  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundColor: "white",
          
        }}
      >
        <div className="row">
          <div className="col-md-4 col-sm-12 ">
            <h1
              style={{
                textAlign: "center",
                fontSize: "3rem",
                fontFamily: "Geneva",
                paddingTop: "25%",
                color: "#3F3F48",
              }}
            >
              Hey There,
            </h1>
            <span>
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "3rem",
                  fontFamily: "Geneva",
                  color: "#3F3F48",
                }}
              >
                I'm{" "}
                <TypeAnimation
                  style={{ color: "#E8B42E" }}
                  sequence={["Fidha", 1000, "a Web Developer", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
            </span>
          </div>
          <div className="col-md-4 col-sm-12  d-flex justify-content-center">
            <img
              src={banner}
              alt="banner"
              style={{ width: "35rem", height: "24rem", marginTop: "10%" }}
            />
          </div>
          <div className="col-md-4 col-sm-12 ">
            <h5
              style={{
                fontFamily: "Brush Script MT, Brush Script Std, cursive",
                fontSize: "2rem",
                paddingTop: "30%",
                color: "#3F3F48",
                textAlign: "center",
              }}
            >
              "I love <span style={{ color: "#E8B42E" }}>web development.</span>
              <span>
                <h5
                  style={{
                    fontFamily: "Brush Script MT, Brush Script Std, cursive",
                    fontSize: "2rem",
                    color: "#3F3F48",
                    textAlign: "center",
                  }}
                >
                  And I love what i do"
                </h5>
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div className="skills" style={{ backgroundColor: "#fff" }}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <AiFillSafetyCertificate style={{ color: "#E8B42E" }} />
              &nbsp;4+ Years Of Experience in Web Development
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <TbCertificate style={{ color: "#E8B42E" }} />
              &nbsp;Certified React Developer
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <FaCertificate style={{ color: "#E8B42E" }} />
              &nbsp;Proficiency in Html,Css,Java Script,React Js,Node Js,My
              Sql,Redux
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
