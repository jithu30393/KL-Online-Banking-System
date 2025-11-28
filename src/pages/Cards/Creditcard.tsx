const CreditCard = () => {
  return (
    <div className="cardDetailsPage">
      <h1>Credit Card Details</h1>

      <div className="cardDetailsBox">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
          width={120}
        />

        <h2>Card Number: •••• •••• •••• 9974</h2>
        <p>Type: Mastercard Credit</p>
        <p>Valid Thru: 05/30</p>
        <p>Credit Limit: ₹1,00,000</p>
        <p>Available Credit: ₹72,500</p>

        <button onClick={() => window.location.href = "/dashboard"}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default CreditCard;
