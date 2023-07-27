import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Header from "./component/Header";
import Banner from "./pages/Banner";


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Banner />
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
