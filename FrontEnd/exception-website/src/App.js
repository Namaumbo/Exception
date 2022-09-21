import AdminPanel from "./Components/AdminPanel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Playing from "./Components/Playing";
import SongList from "./Components/SongList";
import "bootstrap/dist/css/bootstrap.min.css"


// import SongUpload from "./Components/SongUpload";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br /> 
 
    <SongList/>
      {/* <AdminPanel/> */}
      {/* <SongUpload /> */}
      {/* <Playing/> */}
      <br />
      <br /> 
      <Footer />
    </div>
  );
}

export default App;
