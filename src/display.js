import React from "react"; 
import HomeNav from "./component/navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router, Routes, and Route
import 'bootstrap/dist/css/bootstrap.css';

// Import your components if they are in separate files
// import Home from "./Home";
// import ProductList from "./ProductList";
// import BiscuitsList from "./BiscuitsList";

import ProductList from "./component/Project/noodles";
import BiscuitsList from "./component/Project/biscuts";
import Home from "./component/Project/Home";

function Display() {
  return (
    <div>
      <Router>
        <HomeNav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/noodles" element={<ProductList />} />
          <Route path="/biscuts" element={<BiscuitsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Display;
