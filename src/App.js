import { Route, BrowserRouter, Routes ,} from "react-router-dom";
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
import NewsDetails from "./pages/News/NewsDetails";
import Developers from "./pages/Developers"
import { useEffect } from "react";
import ReactGA from 'react-ga'
import { usePageTracking } from "./component/Tracking";
import { useLocation } from "react-router-dom";




function App() {
  const location = useLocation();
  const TRACKING_ID =  'G-BE6F4B2VMY';
    ReactGA.initialize(TRACKING_ID);
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Blogs />} />
          <Route path="/news/:cat" element={<News/>}></Route>
          <Route path="/news/details/:id" element={<NewsDetails/>}></Route>
          <Route path="/dev" element={<Developers/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
