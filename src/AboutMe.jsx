import React from "react";
import me from "./me.jpg";
function AboutMe() {
  return (
    <div>
      <div
        className="aboutme"
        style={{ backgroundColor: "#fff", paddingTop: "1rem",marginBottom:'9%'}}
      >
        <h3 className="text-center">
          About<span style={{ color: "#E8B42E" }}>&nbsp;Me</span>{" "}
        </h3>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <img
              src={me}
              className="rounded-circle mx-auto d-block"
              alt="abtimg"
              style={{ width: "14rem", height: "15rem", marginTop: "6%" }}
            />
            <h5
              className="text-center"
              style={{
                fontFamily: "Geneva",
                color: "#3F3F48",
                paddingTop: "2%",
              }}
            >
              FIDHA PARVIN RIFAS ALI
            </h5>
            <h5
              className="text-center"
              style={{ fontFamily: "Geneva", color: "#E8B42E" }}
            >
              Front End Developer
            </h5>
          </div>
          <div className="col-md-8 col-sm-12">
            <p style={{ marginTop: "5%", marginRight: "4%", marginLeft: "4%" }}>
              Innovative, task driven professional with 3+ years of experience
              in Web Design and Database Administration. Experience in
              developing user interfaces, testing, debugging, and building
              responsive designs. Proficient in developing databases, creating
              user interfaces, writing, and testing codes, troubleshooting
              simple/complex issues, and implementing new features based on
              user’s feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
