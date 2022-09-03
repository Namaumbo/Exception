import "./App.css";
// import AdminPanel from "./Components/AdminPanel";
// import ArtWork from "./Components/ArtWork";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import Playing from "./Components/Playing";
import CoverPic from "./Components/Upload components/CoverPic";
import TrackInfo from "./Components/Upload components/TrackInfo";
import { useState } from "react";

// import Logo from "./Asserts/Logo.png"

function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
    nickname: "",
    email: "",
  })
  const [x, setX] = useState(0);






  const [page, setPage] = useState(0);
  const componentList = [
    <CoverPic page={page} setPage={setPage} formData={formData}
    setFormData={setFormData}   x={x}
    setX={setX}/>,
    <TrackInfo page={page} setPage={setPage} formData={formData}
    setFormData={setFormData}   x={x}
    setX={setX}/>,
  ];

  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <ArtWork /> */}
      {/* <AdminPanel/> */}
      <div className="progress-bar">
      <div style={{width: page === 0? "0%": page === 1? "100%" : "100%"}}></div>
      </div>
      <div>{componentList[page]}</div>
      {/* <Playing/> */}
      <br />
      <br /> {/* <Footer />  */}
    </div>
  );
}

export default App;
