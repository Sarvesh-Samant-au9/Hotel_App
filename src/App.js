import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LandingPage from "./Pages/Landing/LandingPage";
import About from "./Pages/About/About";
import Navbar from "./Layout/Navbar/Navbar";
import HotelState from "./Context/HotelContext/HotelState";
import ListedHotels from "./Components/Listed_Hotels/ListedHotels";
import DetailInfo from "./Components/Detailed_Info/DetailInfo";
import Footer from "./Layout/Footer/Footer";

import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="container-fluid">
      <HotelState>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/list/:id" component={ListedHotels} exact />
            <Route path="/details/:id" component={DetailInfo} exact />
            <Route component={NotFound} exact />
          </Switch>
          <Footer />
        </BrowserRouter>
      </HotelState>
    </div>
  );
}

export default App;
