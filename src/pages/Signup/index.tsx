// Imports
import { useState } from "react";

// Assets
import "./Style.css";
import tux from "../../assets/images/tux.png";

export default function Signup() {
  const [sidebar, setSidebar] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [showResult, setShowResult] = useState(false);

  function handleFinishSignup() {
    if (name && email && nationalId && address) {
      setShowResult(true);

      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } else {
      alert("Please fill in all fields!");
    }
  }

  return (
    <div className="all">
      <main className="signupArea">
        <div className="signupContent">
          <img
            src="https://www.gnu.org/graphics/listen-half.jpg"
            width={140}
            alt="Logo"
          />

          <h1 style={{ fontSize: 30 }}>Let's create your account!</h1>

          <div className="inputsArea">
            <div className="inputName inputItem">
              <p>Name:</p>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="inputEmail inputItem">
              <p>Email:</p>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputNationalId inputItem">
              <p>National ID:</p>
              <input
                type="text"
                placeholder="Enter your national ID"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </div>

            <div className="inputPassword inputItem">
              <p>Password:</p>
              <input
                type="password"
                placeholder="Enter a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputAddress inputItem">
              <p>Address:</p>
              <input
                type="text"
                placeholder="Enter your full address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <button onClick={handleFinishSignup} className="signupButton">
              Sign Up
            </button>

            {showResult && (
              <div className="resultArea">
                <h3>Name: {name}</h3>
                <h3>Email: {email}</h3>
                <h3>National ID: {nationalId}</h3>
                <h3>Address: {address}</h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
