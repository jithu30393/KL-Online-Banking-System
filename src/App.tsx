// Imports
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Assets
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Signin from "./pages/Signin";
import NotFound from "./pages/Notfound";
import Dashboard from "./pages/Dashboard";
import Extract from "./pages/Extract";
import Withdraw from "./pages/Withdraw";
import Finances from "./pages/Finances";
import SuccessTransaction from "./pages/SuccessTransaction";

// ✅ Loan Page Import
import Loan from "./pages/Loan";

import tux from "./assets/images/tux.png";
import navicon from "./assets/images/menu.svg";

export default function App() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <div className="app">

      {/* Header */}
      <header className="headerContainer">
        <div className="leftSide">
          <img src={tux} width={50} alt="Tux Logo" />
          <h1 className="headerTitle">KL Banking</h1>
        </div>

        <nav className="navbar">
          <a className="navItem" href="/">Home</a>
          <a className="navItem" href="/signin">Login</a>
          <a className="navItem" href="/signup">Sign Up</a>
          <a className="navItem" href="/about">About Us</a>
          <img
            onClick={toggleSidebar}
            className="navIcon"
            src={navicon}
            alt="Menu Icon"
          />
        </nav>
      </header>

      {/* Sidebar Navigation */}
      <aside
        style={sidebar ? { width: 300 } : { width: 0 }}
        className="sidebar"
      >
        <div className="sidebarContent">
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/">Home</a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/signup">Sign Up</a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/signin">Login</a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/about">About Us</a>
        </div>
      </aside>

      {/* ROUTES */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-form" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/extract" element={<Extract />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/success-transaction" element={<SuccessTransaction />} />

        {/* ✅ LOAN PAGE ROUTE */}
        <Route path="/loan" element={<Loan />} />
      </Routes>

      {/* FOOTER */}
      <footer className="footerContainer">
        <div className="footerContent">
          <div className="linksArea">
            <ul className="toolsList">
              <li>Tools Used:</li>
              <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
              <li><a href="https://reactjs.org/">ReactJS</a></li>
              <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
            </ul>

            <ul>
              <li>Sources:</li>
              <li><a href="https://wiki.gentoo.org/wiki/Main_Page">Gentoo Wiki</a></li>
              <li><a href="https://www.gnu.org/gnu/KL-and-gnu.pt-br.html">GNU</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Main_Page">Wikipedia</a></li>
            </ul>
          </div>

          <img
            id="znurt"
            src="https://wiki.gentoo.org/images/4/4c/Znurt.svg"
            alt="Znurt Logo"
          />
        </div>
      </footer>

    </div>
  );
}
