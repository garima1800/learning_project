import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Darklight from "./components/Darklight";
import React, { useState } from "react";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "sucess  :");
    } else if (mode === "dark") {
      setMode("green");
      document.body.style.backgroundColor = "green";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      showAlert("light mode has been enabled", "sucess");
    }
  };

  return (
    <>
      {/* <Route path="/" element={<Home />} /> */}

      {/* <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-">
          <Routes>
            <Route path="/">
              <Darklight />
            </Route>
            <Route path="/form">
              <Form
                heading="you can type here"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            </Route>
          </Routes>
        </div>
      </Router> */}
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<Darklight />} />
          <Route
            path="/form"
            element={
              <Form
                heading="you can type here"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
