import { BrowserRouter, Routes, Route } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import FreshSardines from "./FreshSardines";
import Home from "./Home";

const VendingMachine = () => {
  // The instruction videos in Springboard are out-of-date, as usual.

  // In React Router v5 and earlier, we used to use <Route> inside <BrowserRouter> (or <Router>). However, from v6 onwards, the developers decided to change the API to have better semantics. We now use <Route> inside <Routes>.

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/soda" element={<Soda />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/freshsardines" element={<FreshSardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default VendingMachine;
