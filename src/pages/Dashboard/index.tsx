import { useState, useEffect } from "react";
import "./Style.css";

type Transaction = {
  type: "Credit" | "Debit";
  amount: number;
  date: string;
};

const Dashboard = () => {
  const [showCredit, setShowCredit] = useState(true);
  const [userCredit, setUserCredit] = useState<number>(1000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load balance + transactions from localStorage when dashboard mounts
  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) {
      setUserCredit(parseFloat(savedBalance));
    } else {
      localStorage.setItem("balance", "1000"); // initial default
    }

    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    } else {
      localStorage.setItem("transactions", JSON.stringify([]));
    }
  }, []);

  const toggleCreditVisibility = () => {
    setShowCredit(!showCredit);
  };

  const goToExtract = () => {
    window.location.href = "/extract";
  };

  const goToWithdrawPage = () => {
    window.location.href = "/withdraw";
  };

  const hour = new Date().getHours();
  const credit = showCredit ? userCredit.toFixed(2) : "*****";

  const greeting =
    hour <= 11
      ? "Good Morning"
      : hour >= 12 && hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <div className="dashboardPage">
      <div className="dashboardContent">
        {/* Top Side */}
        <div className="dashboardTopSide">
          <div className="topSideContent">
            <img
              src="https://www.gnu.org/graphics/gnu-alternative.jpg"
              style={{ marginTop: 10 }}
              width={100}
              alt="Logo"
            />
            <h1>{greeting} Customer</h1>
            <h2>Your current balance is:</h2>
            <h1>${credit}</h1>

            <button
              className="showCreditButton"
              onClick={toggleCreditVisibility}
            >
              {showCredit ? "Hide Balance" : "Show Balance"}
            </button>
            <button onClick={goToWithdrawPage} className="withdrawButton">
              Withdraw & Deposit
            </button>
          </div>
        </div>

        {/* Bottom Side */}
        <div className="dashboardBottomSide">
          <div onClick={goToExtract} className="extract">
            <h3>Account Statement</h3>
          </div>

          <div
            onClick={() => {
              window.location.href = "/finances";
            }}
            className="finance"
          >
            <h3>Finances</h3>
          </div>
        </div>

        {/* Transactions History */}
        <div className="transactionsHistory">
          <h2>Recent Transactions</h2>
          {transactions.length === 0 ? (
            <p>No transactions yet.</p>
          ) : (
            <ul>
              {transactions
                .slice(-5) // show last 5
                .reverse()
                .map((tx, index) => (
                  <li
                    key={index}
                    className={tx.type === "Credit" ? "creditTx" : "debitTx"}
                  >
                    <strong>{tx.type}</strong> of ${tx.amount.toFixed(2)} on{" "}
                    {tx.date}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
