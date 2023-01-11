import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Operator from "./component/Operator/Operator";
import Pendaftaran from "./component/Pendaftaran/Pendaftaran";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="app-header">
          <Navbar />
        </div>
        <div className="app-content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Operator" element={<Operator />} />
            <Route exact path="/Pendaftaran" element={<Pendaftaran />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
