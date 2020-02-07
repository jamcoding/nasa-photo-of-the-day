import React from "react";
import PhotoContainer from "./Photo Components/PhotoContainer";
// import MarsContainer from "./Mars Components/MarsContainer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <PhotoContainer />
      {/* <MarsContainer /> */}
    </div>
  );
}
 
export default App;
