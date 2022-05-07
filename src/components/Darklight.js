import React, { useState } from "react";

export default function Darklight() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Disable Dark Mode");

  let toggleStyle = () => {
    if ((myStyle.color === "black", myStyle.backgroundColor === "white")) {
      setMyStyle({ color: "white", backgroundColor: "black" });

      setBtnText(" Enable Light mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText(" Enable Dark mode");
    }
  };
  return (
    <>
      <div className="container my-2" style={myStyle}>
        <div
          className="accordion accordion-flush  my-2"
          id="accordionFlushExample"
        >
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              style={myStyle}
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2
              className="accordion-header"
              id="flush-headingTwo"
              style={myStyle}
            >
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              style={myStyle}
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the second item's accordion body. Let's imagine this being
                filled with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2
              className="accordion-header"
              id="flush-headingThree"
              style={myStyle}
            >
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              style={myStyle}
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={myStyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> className. This is
                the third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button className="btn btn-primary mx-2 my-2" onClick={toggleStyle}>
          {btnText}
        </button>
      </div>
    </>
  );
}
