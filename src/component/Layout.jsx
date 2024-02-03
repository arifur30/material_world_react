import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { ChildCare } from '@mui/icons-material';
import ReactGA from "react-ga"

const Layout = ({Children}) => {
   
        useEffect(() => {
   
            const TRACKING_ID =  '426109594';
              ReactGA.initialize(TRACKING_ID);
            
            ReactGA.pageview(window.location.pathname)
          }, [window.location.pathname]);
  
    return (
       <>
       <Header>
        
        </Header>
        <div>
            {Children}
        </div>
        
        <Footer></Footer>
        </>
    );
};

export default Layout;