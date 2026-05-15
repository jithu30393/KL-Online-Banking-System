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

  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) {
      setUserCredit(parseFloat(savedBalance));
    } else {
      localStorage.setItem("balance", "1000");
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
              width={100}
              alt="Logo"
            />

            <h1>{greeting} Customer</h1>
            <h2>Your current balance is:</h2>
            <h1>${credit}</h1>

            <div className="buttonGroup">
              <button
                className="showCreditButton"
                onClick={toggleCreditVisibility}
              >
                {showCredit ? "Hide Balance" : "Show Balance"}
              </button>

              <button
                onClick={goToWithdrawPage}
                className="withdrawButton"
              >
                Withdraw & Deposit
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="cardsSection">
          <h2>Your Cards</h2>

          <div className="cardsContainer">
            
            {/* Credit Card */}
            <div className="bankCard creditCard">
              <div className="cardTop">
                <span>Credit Card</span>
                <span>💳</span>
              </div>

              <div className="cardMiddle">
                <h3>**** **** **** 4567</h3>
                <p><p>CARD HOLDER</p></p>
              </div>

              <div className="cardBottom">
                <span>VALID THRU 12/29</span>
                <span>VISA</span>
              </div>
            </div>

            {/* Debit Card */}
            <div className="bankCard debitCard">
              <div className="cardTop">
                <span>Debit Card</span>
                <span>🏦</span>
              </div>

              <div className="cardMiddle">
                <h3>**** **** **** 8912</h3>
                <p><p>CARD HOLDER</p></p>
              </div>

              <div className="cardBottom">
                <span>VALID THRU 08/28</span>
                <span>MasterCard</span>
              </div>
            </div>
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

        {/* Transactions */}
        <div className="transactionsHistory">
          <h2>Recent Transactions</h2>

          {transactions.length === 0 ? (
            <p>No transactions yet.</p>
          ) : (
            <ul>
              {transactions
                .slice(-5)
                .reverse()
                .map((tx, index) => (
                  <li
                    key={index}
                    className={tx.type === "Credit" ? "creditTx" : "debitTx"}
                  >
                    <strong>{tx.type}</strong> of $
                    {tx.amount.toFixed(2)} on {tx.date}
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