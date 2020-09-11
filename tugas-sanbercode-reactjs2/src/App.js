import React from "react";
// import Tugas9 from "./Tugas-9/tugas9";
// import Tugas10 from "./Tugas-10/tugas10";
// import Tugas11 from "./Tugas-11/tugas11";
// import Tugas12 from "./Tugas-12/tugas12";
// import Tugas13 from "./Tugas-13/tugas13";
// import Tugas14 from "./Tugas-14/tugas14";
import "./App.css";
import Routes from "./Tugas-15/routes"
import { BrowserRouter as Router } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       {/* <Tugas9 />
//       <Tugas10 />
//       <Tugas11 />

//       <Tugas12 /> 
//       <Tugas13 /> */}
//       <Tugas14 />
//     </div>
//   );
// }


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;