import "./Style.css";

const SuccessTransaction = () => {
  setTimeout(() => {
    window.location.href = "/dashboard";
  }, 3000);

  return (
    <div className="successPage">
      <h1>Transaction Completed Successfully!</h1>
      <img
        width={300}
        src="https://www.gnu.org/graphics/fsfsociety/party-thumb.png"
        alt="Celebration"
      />
    </div>
  );
};

export default SuccessTransaction;
