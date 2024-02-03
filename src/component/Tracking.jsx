import ReactGA from 'react-ga'
import { useLocation } from 'react-router-dom';
import { useState ,useEffect} from 'react';
function initialiseAnalytics() {
    const TRACKING_ID =  'G-BE6F4B2VMY';
    ReactGA.initialize(TRACKING_ID);
  }
  
 export const usePageTracking=()=> {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);
  
    useEffect(() => {
      initialiseAnalytics();
      setInitialized(true);
    }, []);
  
    useEffect(() => {
      if (initialized) {
        console.log(location.pathname)
        ReactGA.pageview(location.pathname + location.search);
      }
    }, [initialized, location]);
  }
  