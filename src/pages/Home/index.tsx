// Imports
import { useState, useEffect } from "react";

// Assets
import "./Style.css";
import navIcon from "../../assets/images/menu.svg";
import tux from "../../assets/images/tux.png";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const [dollarPrice, setDollarPrice] = useState<number>();
  const [euroPrice, setEuroPrice] = useState<number>();

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  function fetchDollarPrice() {
    fetch("https://economia.awesomeapi.com.br/json/last/usd")
      .then((response) => response.json())
      .then((data) => setDollarPrice(data.USDBRL.ask));
  }

  function fetchEuroPrice() {
    fetch("https://economia.awesomeapi.com.br/json/last/eur")
      .then((response) => response.json())
      .then((data) => setEuroPrice(data.EURBRL.ask));
  }

  useEffect(() => {
    fetchDollarPrice();
    fetchEuroPrice();
  }, []);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside style={sidebar ? { width: 300 } : { width: 0 }} className="sidebar">
        <div className="sidebarContent">
          <a
            style={sidebar ? { display: "block" } : { display: "none" }}
            className="sidebarItem"
            href=""
          >
            Home
          </a>
          <a
            style={sidebar ? { display: "block" } : { display: "none" }}
            className="sidebarItem"
            href=""
          >
            Signup
          </a>
          <a
            style={sidebar ? { display: "block" } : { display: "none" }}
            className="sidebarItem"
            href=""
          >
            Loans
          </a>
          <a
            style={sidebar ? { display: "block" } : { display: "none" }}
            className="sidebarItem"
            href=""
          >
            Current Account
          </a>
          <a
            style={sidebar ? { display: "block" } : { display: "none" }}
            className="sidebarItem"
            href=""
          >
            About Us
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="home">
        <div className="miniHeader">
          <div className="dollarArea">
            <h3>💵 Dollar Today: R${dollarPrice}</h3>
          </div>
          <div className="bar"></div>
          <div className="euroArea">
            <h3>💶 Euro Today: R${euroPrice}</h3>
          </div>
        </div>

        <div className="mainArea">
          <h1 className="title">
            <img
              src="https://www.gnu.org/graphics/meditate.svg"
              width={80}
              alt="Meditating GNU"
            />{" "}
            KL Banking
          </h1>
          <p className="slogan">
            Free Bank, Free Software, Free People. | Premium Security!
          </p>
        </div>
      </main>
    </div>
  );
}
