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




function App() {
  
  return (
    <>
      
       
        <Routes>
         
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/' element={<Layout><Blogs /></Layout>} />
          <Route path="/news/:cat" element={<Layout><News/></Layout>}></Route>
          <Route path="/news/details/:id" element={<Layout><NewsDetails/></Layout>}></Route>
          <Route path="/dev" element={<Layout><Developers/></Layout>}></Route>
        </Routes>
       
      
    </>
  );
}

export default App;
