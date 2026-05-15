import { useState } from "react";
import "./Style.css";

const CurrentAccount = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = () => {
    if (emailInput && passwordInput) {
      window.location.href = "/dashboard";
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="signinPage">
      <div className="signinContent">
        <div className="signTopSide">
          <img
            src="https://www.gnu.org/graphics/gnuhead_plain.svg"
            width={200}
            alt="Logo"
          />
          <h1>Time to log in!</h1>
        </div>

        <div className="signBottomSide">
          <div className="signInputs">
            <input
              type="text"
              placeholder="Email or CPF..."
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>

          {/* Correct login button */}
          <button onClick={handleLogin} className="signinButton">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentAccount;
