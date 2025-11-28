// Imports
import { useState, useEffect } from "react";
import "./Style.css";

// Chart Imports (Bar only)
import { Bar } from "react-chartjs-2";
import jsPDF from "jspdf";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Transaction = {
  type: string;
  amount: number;
  date: string;
  emi?: number;
  months?: number;
};

const Dashboard = () => {
  const [showCredit, setShowCredit] = useState(true);
  const [userCredit, setUserCredit] = useState<number>(1000);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load balance & transactions
  useEffect(() => {
    const savedBalance = localStorage.getItem("balance");
    if (savedBalance) setUserCredit(parseFloat(savedBalance));

    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  const toggleCreditVisibility = () => setShowCredit(!showCredit);

  const goToWithdrawPage = () => (window.location.href = "/withdraw");
  const goToLoanPage = () => (window.location.href = "/loan");

  // Card details pages
  const goToDebitCard = () => (window.location.href = "/card/debit");
  const goToCreditCard = () => (window.location.href = "/card/credit");

  const hour = new Date().getHours();
  const credit = showCredit ? userCredit.toFixed(2) : "*****";

  const greeting =
    hour <= 11 ? "Good Morning" :
    hour < 17 ? "Good Afternoon" : "Good Evening";

  // PDF Export
  const exportAnalyticsToPDF = () => {
    const doc = new jsPDF();
    doc.text("KL Banking Analytics Report", 20, 20);
    doc.text("Total Transactions: " + transactions.length, 20, 40);
    doc.text(
      "Total Credits: $" +
        transactions.filter(t => t.type === "Credit").reduce((s, t) => s + t.amount, 0),
      20, 60
    );
    doc.text(
      "Total Debits: $" +
        transactions.filter(t => t.type === "Debit").reduce((s, t) => s + t.amount, 0),
      20, 80
    );
    doc.text(
      "Total Loans: $" +
        transactions.filter(t => t.type.includes("Loan")).reduce((s, t) => s + t.amount, 0),
      20, 100
    );
    doc.save("Analytics_Report.pdf");
  };

  return (
    <div className="dashboardPage">
      <div className="dashboardContent">
        
        {/* ==== TOP SIDE ==== */}
        <div className="dashboardTopSide">
          <div className="topSideContent">
            <img
              src="https://www.gnu.org/graphics/gnu-alternative.jpg"
              width={100}
              style={{ marginTop: 10 }}
            />
            <h1>{greeting} Customer</h1>
            <h2>Your current balance is:</h2>
            <h1>${credit}</h1>

            <button className="showCreditButton" onClick={toggleCreditVisibility}>
              {showCredit ? "Hide Balance" : "Show Balance"}
            </button>

            <button onClick={goToWithdrawPage} className="withdrawButton">
              Withdraw & Deposit
            </button>

            <button onClick={goToLoanPage} className="loanButton">
              Loan Services
            </button>
          </div>
        </div>

        {/* ==== CARDS ==== */}
        <div className="cardsSection">
          <h2>Your Cards</h2>

          <div className="cardsContainer">
            
            {/* Debit Card Click */}
            <div className="cardItem debitCard" onClick={goToDebitCard}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" width={80} />
              <h3>Debit Card</h3>
              <p>•••• 5627</p>
            </div>

            {/* Credit Card Click */}
            <div className="cardItem creditCard" onClick={goToCreditCard}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" width={80} />
              <h3>Credit Card</h3>
              <p>•••• 9974</p>
            </div>

          </div>
        </div>

        {/* ==== ANALYTICS ==== */}
        <div className="analyticsSection">
          <h2>Analytics Overview</h2>

          <div className="analyticsContainer">

            <div className="analyticsCard">
              <h3>Total Credits</h3>
              <p>
                ${transactions.filter(t => t.type === "Credit")
                  .reduce((s, t) => s + t.amount, 0)
                  .toFixed(2)}
              </p>
            </div>

            <div className="analyticsCard">
              <h3>Total Debits</h3>
              <p>
                ${transactions.filter(t => t.type === "Debit")
                  .reduce((s, t) => s + t.amount, 0)
                  .toFixed(2)}
              </p>
            </div>

            <div className="analyticsCard">
              <h3>Total Loans</h3>
              <p>
                ${transactions.filter(t => t.type.includes("Loan"))
                  .reduce((s, t) => s + t.amount, 0)
                  .toFixed(2)}
              </p>
            </div>

            <div className="analyticsCard">
              <h3>Total Transactions</h3>
              <p>{transactions.length}</p>
            </div>

          </div>

          {/* BAR CHART */}
          <div className="chartCard">
            <h3>Monthly Activity</h3>

            <Bar
              data={{
                labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
                datasets: [
                  {
                    label: "Credits",
                    backgroundColor: "#4ade80",
                    data: Array(12).fill(0).map((_, i) =>
                      transactions.filter(t => 
                        t.type === "Credit" && new Date(t.date).getMonth() === i
                      ).reduce((s, t) => s + t.amount, 0)
                    ),
                  },
                  {
                    label: "Debits",
                    backgroundColor: "#f87171",
                    data: Array(12).fill(0).map((_, i) =>
                      transactions.filter(t => 
                        t.type === "Debit" && new Date(t.date).getMonth() === i
                      ).reduce((s, t) => s + t.amount, 0)
                    ),
                  },
                ],
              }}
            />
          </div>

          <button className="exportButton" onClick={exportAnalyticsToPDF}>
            Export Analytics PDF
          </button>
        </div>

        {/* ==== TRANSACTIONS ==== */}
        <div className="transactionsHistory">
          <h2>Recent Transactions</h2>

          {transactions.length === 0 ? (
            <p>No transactions yet.</p>
          ) : (
            <ul>
              {transactions.slice(-5).reverse().map((tx, index) => (
                <li key={index} className={tx.type === "Credit" ? "creditTx" : "debitTx"}>
                  <strong>{tx.type}</strong> of ${tx.amount.toFixed(2)} on {tx.date}
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
