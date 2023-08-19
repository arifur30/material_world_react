import { Route, BrowserRouter, Routes } from "react-router-dom";
import Banner from "./pages/Banner";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";

import LatestNews from "./component/LatestNews";

import Footer from "./component/Footer";
import Header from "./component/Header";
import TopStories from "./component/TopStories";
import Home from "./pages/Home";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>


          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Router>
       <Header/>
        <Banner />
        <TopStories />
        <LatestNews/>
        <Routes>
       
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        </Routes>
        <Footer/>
      </Router> */}
    </>
  );
}

export default App;
