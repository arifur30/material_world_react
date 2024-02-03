import { Route, BrowserRouter, Routes ,} from "react-router-dom";


import Footer from "./component/Footer";
import Header from "./component/Header";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import News from "./pages/News/News";
import NewsDetails from "./pages/News/NewsDetails";
import Developers from "./pages/Developers"
import { useEffect } from "react";

import {withRouter} from "react-router-dom"

import { useLocation } from "react-router-dom";
import Layout from "./component/Layout";

import ReactGA from 'react-ga'



function App() {
  useEffect(() => {
   
    const TRACKING_ID =  'UA-263820946-4';
      ReactGA.initialize(TRACKING_ID);
    
    ReactGA.pageview(window.location.pathname)
  }, []);
  
  return (
    <>
      <Header/>
       
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Blogs />} />
          <Route path="/news/:cat" element={<News/>}></Route>
          <Route path="/news/details/:id" element={<NewsDetails/>}></Route>
          <Route path="/dev" element={<Developers/>}></Route>
        </Routes>
       <Footer/>
      
    </>
  );
}

export default App;
