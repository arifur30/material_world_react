import { Route, BrowserRouter, Routes ,} from "react-router-dom";


import Footer from "./component/Footer";
import Header from "./component/Header";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import Developers from "./pages/Developers"
import { useEffect } from "react";
import ReactGA from 'react-4'

import { useLocation } from "react-router-dom";




function App() {
  const location = useLocation();
  useEffect(() => {
   
    const TRACKING_ID =  'G-BE6F4B2VMY';
      ReactGA.initialize(TRACKING_ID);
    console.log(location)
    ReactGA.send("pageview")
  }, [location]);
  return (
    <>
      
        <Header />
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Blogs />} />
          <Route path="/news/:cat" element={<News/>}></Route>
          <Route path="/news/details/:id" element={<NewsDetails/>}></Route>
          <Route path="/dev" element={<Developers/>}></Route>
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
