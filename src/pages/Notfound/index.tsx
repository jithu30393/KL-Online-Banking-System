// Imports
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

const SuccessTransaction = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate("/dashboard"); // ✅ Go to Customer Account
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [navigate]);

  return (
    <div className="successPage">
      <h1>✅ Transaction Successful</h1>
      <p>You will be redirected to your account shortly.</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
        alt="Success"
        width={150}
      />
    </div>
  );
};

export default SuccessTransaction;
