import "./App.css";
import ArtWork from "./Components/ArtWork";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Playing from "./Components/Playing";

// import Logo from "./Asserts/Logo.png"

function App() {
  return (
    <div className="App">
       <Navbar />
      {/* <br /> 
      <ArtWork />
      <Footer /> */}
      <Playing/>
    </div>
  );
}

export default App;
