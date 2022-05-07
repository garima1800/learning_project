import React, { useState } from "react";

function Form(props) {
  const handleOnClick = (props) => {
    console.log("handle on click is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("its capital now");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // ----------------------------------------
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };
  const ClearAll = () => {
    setText(" ");
  };
  const copyToClipboard = (t) => {
    const text = document.getElementById("Textarea1");
    // document.body.appendChild(textarea);
    // textarea.value = text;
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
  };
  const handleReverseText = () => {
    console.log(
      "Warning your data can be revesed .But don't worry because you can again reverse it to get the correct data.Thank you for using this function."
    );
    let Text = text.split("");
    let reverseText = Text.reverse().toString().replaceAll(",", "");

    console.log(Text.reverse().toString().replaceAll(",", ""));
    setText(reverseText);
  };
  //   function reverseString(str) {
  //     return str.split("").reverse().join("");
  // }
  // reverseString("hello");
  const [text, setText] = useState(" ");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label
          htmlfor="exampleFormControlTextarea1"
          className="form-label"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          Example textarea
        </label>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="Textarea1"
            rows="3"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          type="submit"
          onClick={handleOnClick}
        >
          Capital
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          type="submit"
          //   onChange={handleOnReverse}
          // value={word}
          onClick={handleReverse}
        >
          Reverse words
        </button>
        <button
          className="btn btn-primary mx-2"
          type="submit"
          //   onChange={handleOnReverse}
          // value={word}
          onClick={ClearAll}
        >
          Clear All
        </button>
        <button
          className="btn btn-primary mx-2"
          type="submit"
          onClick={copyToClipboard}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2"
          type="submit"
          onClick={handleReverseText}
        >
          Reverse Text
        </button>
        {/* </div> */}
        <div>
          <div
            className="container"
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            number of words in this text is {text.split(" ").length}and number
            of character is {text.length}character
          </div>
        </div>

        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>Preview</h1>
          <div>{text}</div>
        </div>
      </div>
    </>
  );
}
export default Form;
