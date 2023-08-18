import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./pages/Banner";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";

import LatestNews from "./component/LatestNews";

import Footer from "./component/Footer";
import Header2 from "./component/Header2";
import TopStories from "./component/TopStories";



function App() {
  return (
    <div>
      <Router>
       {/* <Header2/> */}
        <Banner />
        <TopStories />
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
