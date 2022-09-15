import AdminPanel from "./Components/AdminPanel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Playing from "./Components/Playing";
import SongList from "./Components/SongList";


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
