import { Route, BrowserRouter, Routes } from "react-router-dom";
import Banner from "./pages/Banner";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";

import LatestNews from "./component/LatestNews";

import Footer from "./component/Footer";
import Header from "./component/Header";
import TopStories from "./component/TopStories";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import News from "./pages/News/News";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Blogs />} />
          <Route path="/news" element={<News/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
