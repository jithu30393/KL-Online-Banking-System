// Imports
import { useState } from "react";

// Assets
import "./Style.css";

const Finances = () => {
  const [financeInput, setFinanceInput] = useState("");
  const interestRate = 5; // 5%

  const handleCalculate = () => {
    const amount = parseFloat(financeInput);

    const interest = (interestRate / 100) * amount;

    alert(`Total Interest: $${interest}`);
  };

  return (
    <div className="financesPage">
      <div className="financesItem">
        <div className="financesTopSide">
          <img
            src={"https://www.gnu.org/graphics/gnu-alternative.svg"}
            width={150}
            alt="Logo"
          />
          <h3>Finance Simulation</h3>

          <div className="financeArea">
            <p>Amount:</p>
            <input
              value={financeInput}
              onChange={(e) => setFinanceInput(e.target.value)}
              type="number"
              placeholder="$100"
            />
          </div>

          <button onClick={handleCalculate}>Calculate Finance</button>
        </div>
        <div className="financesSide"></div>
      </div>
    </div>
  );
};

export default Finances;
