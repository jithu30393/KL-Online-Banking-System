// Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for SPA navigation

// Assets
import "./Style.css";

const Withdraw = () => {
  const [transactionType, setTransactionType] = useState(0); // 0 = Withdraw, 1 = Deposit
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const navigate = useNavigate();

  const handleFinishTransaction = () => {
    const currentBalance = parseFloat(localStorage.getItem("balance") || "1000"); // default 1000

    if (transactionType === 0 && withdrawAmount.trim() !== "" && withdrawAmount !== "0") {
      const newBalance = currentBalance - parseFloat(withdrawAmount);
      if (newBalance < 0) {
        alert("Insufficient funds!");
        return;
      }
      localStorage.setItem("balance", newBalance.toString());

      // optional: save transaction history
      saveTransaction("Withdraw", withdrawAmount);

      setTimeout(() => navigate("/successtransaction"), 1000);

    } else if (transactionType === 1 && depositAmount.trim() !== "" && depositAmount !== "0") {
      const newBalance = currentBalance + parseFloat(depositAmount);
      localStorage.setItem("balance", newBalance.toString());

      // optional: save transaction history
      saveTransaction("Deposit", depositAmount);

      setTimeout(() => navigate("/successtransaction"), 1000);

    } else {
      alert("Please enter an amount");
    }
  };

  // ✅ save transaction logs in localStorage
  const saveTransaction = (type: string, amount: string) => {
    const history = JSON.parse(localStorage.getItem("transactions") || "[]");
    const newTransaction = {
      type,
      amount: parseFloat(amount),
      date: new Date().toLocaleString(),
    };
    history.push(newTransaction);
    localStorage.setItem("transactions", JSON.stringify(history));
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
            <p>Do you want to withdraw or deposit?</p>

            <div className="switchButtons">
              <button onClick={() => setTransactionType(0)}>Withdraw</button>
              <button onClick={() => setTransactionType(1)}>Deposit</button>
            </div>
          </div>
        </div>

        <div className="transactionBottomSide">
          {transactionType === 0 ? (
            <div className="transactionInputs">
              <div>
                <h3 className="withdrawArea">Withdraw:</h3>
                <input
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  type="number"
                  placeholder="$100"
                />
              </div>
              <div className="finishArea">
                <button onClick={handleFinishTransaction}>Complete Transaction</button>
              </div>
            </div>
          ) : (
            <div className="transactionInputs">
              <div className="depositArea">
                <h3>Deposit:</h3>
                <input
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  type="number"
                  placeholder="$100"
                />
              </div>
              <div className="finishArea">
                <button onClick={handleFinishTransaction}>Complete Transaction</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
