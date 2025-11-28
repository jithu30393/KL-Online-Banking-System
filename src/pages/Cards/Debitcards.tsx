const DebitCard = () => {
  return (
    <div className="cardDetailsPage">
      <h1>Debit Card Details</h1>

      <div className="cardDetailsBox">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
          width={120}
        />

        <h2>Card Number: •••• •••• •••• 5627</h2>
        <p>Type: VISA Debit</p>
        <p>Valid Thru: 08/29</p>
        <p>Status: Active</p>

        <button onClick={() => window.location.href = "/dashboard"}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default DebitCard;
