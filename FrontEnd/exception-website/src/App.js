import AdminPanel from "./Components/AdminPanel";
// import ArtWork from "./Components/ArtWork";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import Playing from "./Components/Playing";

import SongUpload from "./Components/SongUpload";

// import Logo from "./Asserts/Logo.png"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ArtWork /> */}
      <AdminPanel/>
      {/* <SongUpload /> */}
      {/* <Playing/> */}
      <br />
      <br /> <Footer />
    </div>
  );
}

export default App;
