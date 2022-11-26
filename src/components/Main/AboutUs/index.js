import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bgAboutUs">
      <div className="col">
        <div
          className="card text-center bg-transparent"
          style={{
            position: "relative",
            top: "200px",
            width: "100%",
            border: "none",
          }}
        >
          <div className="card-body">
            <h2 className="text-light d-flex justify-content-center">
              About Us
            </h2>
            <hr
              style={{
                border: "solid 2px white",
                width: "200px",
                margin: "0 auto",
              }}
            />
            <br />
            <Button
              onClick={() => setOpen(!open)}
              className="bg-transparent btn btn-outline-light text-light"
              aria-controls="AboutUsText"
              aria-expanded={open}
            >
              About Us
            </Button>
            <Collapse in={open}>
              <div id="AboutUsText">
                <p className="text-light">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </p>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
