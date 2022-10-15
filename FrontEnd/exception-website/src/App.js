import AdminPanel from "./Components/AdminPanel";
import Footer from "./Components/Footer";
import Playing from "./Components/Playing";
import SongList from "./Components/SongList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NoPage from "./Components/NoPage";
import ParentNav from "./Components/ParentNav";
import { useRecoilState ,atom} from "recoil";



function App() {

  // you have to re0define the atom here and the sharing componet
  const activeTrack = atom({
    key: "activeUrl",
    default: "",
  
  });

  const [activeTrackUrl] = useRecoilState(activeTrack)

  return (
    <div className="App">
      <>
      {console.log(activeTrackUrl)}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ParentNav />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<SongList  />} />
              <Route path={activeTrackUrl} element={<Playing />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <AdminPanel/> */}
      </>

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
