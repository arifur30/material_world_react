import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Banner from "./pages/Banner";
<<<<<<< HEAD
import LatestNews from "./component/LatestNews";
=======
import Footer from "./component/Footer";
import Header2 from "./component/Header2";
>>>>>>> a05c5b534dd87ce423ccfdef4da6c33a238a35f5


function App() {
  return (
    <div>
      <Router>
       <Header2/>
        <Banner />
        <LatestNews/>
        <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */}
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
