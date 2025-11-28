// Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const LoanPage = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanMonths, setLoanMonths] = useState("");
  const [loanType, setLoanType] = useState("Personal Loan");
  const navigate = useNavigate();

  // EMI Formula
  const calculateEMI = (amount: number, months: number) => {
    const interestRate = 8 / 100 / 12; // 8% yearly → monthly
    return (
      (amount * interestRate * Math.pow(1 + interestRate, months)) /
      (Math.pow(1 + interestRate, months) - 1)
    );
  };

  const handleLoanSubmit = () => {
    if (loanAmount.trim() === "" || loanMonths.trim() === "") {
      alert("Please enter loan amount and duration.");
      return;
    }

    const amount = parseFloat(loanAmount);
    const months = parseInt(loanMonths);
    const emi = calculateEMI(amount, months);

    // Store Loan Transaction
    const history = JSON.parse(localStorage.getItem("transactions") || "[]");
    const newLoan = {
      type: `${loanType}`,
      amount: amount,
      emi: emi,
      months: months,
      date: new Date().toLocaleString(),
    };

    history.push(newLoan);
    localStorage.setItem("transactions", JSON.stringify(history));

    // Navigate to success page
    setTimeout(() => navigate("/successtransaction"), 1000);
  };

  return (
    <div className="withdrawPage">
      <div className="transactionItems">
        <div className="transactionTopSide">
          <div className="switchButtonsArea">
            <img
              src="https://www.gnu.org/graphics/gnu-alternative.svg"
              width={150}
              alt="Logo"
            />
            <p>Apply for a Loan</p>

            <div className="switchButtons">
              <button onClick={() => setLoanType("Personal Loan")}>
                Personal Loan
              </button>
              <button onClick={() => setLoanType("Home Loan")}>
                Home Loan
              </button>
              <button onClick={() => setLoanType("Vehicle Loan")}>
                Vehicle Loan
              </button>
            </div>
          </div>
        </div>

        {/* Loan Inputs */}
        <div className="transactionBottomSide">
          <div className="transactionInputs">
            <div>
              <h3 className="withdrawArea">Loan Amount:</h3>
              <input
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                type="number"
                placeholder="$5000"
              />
            </div>

            <div>
              <h3 className="withdrawArea">Duration (Months):</h3>
              <input
                value={loanMonths}
                onChange={(e) => setLoanMonths(e.target.value)}
                type="number"
                placeholder="12"
              />
            </div>

            <div className="finishArea">
              <button onClick={handleLoanSubmit}>Apply Loan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanPage;
