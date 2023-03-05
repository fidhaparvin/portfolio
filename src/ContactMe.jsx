import { Button } from "antd";
import React from "react";

function ContactMe() {
  return (
    <div>
      <div
        className="contactme"
        style={{ backgroundColor: "#fff", paddingTop: "1rem",marginBottom:'7%'}}
      >
        <h3 className="text-center">
          Contact<span style={{ color: "#E8B42E" }}>&nbsp;Me</span>{" "}
        </h3>
        <div className="row">
        <div className="col-md-4 col-sm-12">
<h3 style={{marginTop:'25%',marginLeft:'30%'}}>Let's get in <span style={{color:'#E8B42E'}}>Touch</span></h3>
          </div>
          <div className="col-md-8 col-sm-12">
            <form
              align="center"
              style={{
                backgroundColor: "#f8f9fa",
                marginTop: "3%",
                padding: "2%",
                width: "80%",
                marginLeft: "9%",
                
              }}
            >
              <table cellPadding={8}
                style={{
                  width: "100%",
                  marginTop: "5%",
                  borderSpacing: "20px",
                  
                }}
              >
                <tr>
                  <td>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                      style={{
                        fontFamily: "geneva",
                        fontSize: "1.3rem",
                        width: "100%",
                        height: "3rem",
                        borderRadius: "5px",
                        borderColor:"white",
                        boxShadow:'2px 3px #adb5bd'
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                      style={{
                        fontFamily: "geneva",
                        fontSize: "1.3rem",
                        width: "100%",
                        height: "3rem",
                        borderRadius: "5px",
                        borderColor:"white",
                        boxShadow:'2px 3px #adb5bd'
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="E mail"
                      style={{
                        fontFamily: "geneva",
                        fontSize: "1.3rem",
                        width: "100%",
                        height: "3rem",
                        borderRadius: "5px",
                        borderColor:"white",
                        boxShadow:'2px 3px #adb5bd'
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <textarea
                      placeholder="Message"
                      style={{
                        fontFamily: "geneva",
                        fontSize: "1.3rem",
                        width: "100%",
                        height: "5rem",
                        borderRadius: "5px",
                        
                        boxShadow:'2px 3px #adb5bd',
                        borderTop:'2px solid #adb5bd',
                        borderLeft:'2px solid #adb5bd'
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="text-center">
                      <Button
                        style={{
                          backgroundColor: "#E8B42E",
                          width: "10rem",
                          height: "2.5rem",
                          borderRadius: "25px",
                          fontFamily:'geneva',
                          
                          fontSize:'1.4rem',
                          boxShadow:'1px 2px white',
                        }}
                      >
                        Send
                      </Button>
                      {""}
                    </div>
                  </td>
                </tr>
              </table>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
