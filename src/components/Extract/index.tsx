import "./Style.css";
import downloadIcon from "../../assets/images/download.svg";

interface Props {
  id: string;
  invoiceName: string;
  openingDate: string;
  closingDate: string;
  amountPaid: string;
  amountRemaining: string;
  download: string;
}

const ExtractItem = ({
  id,
  invoiceName,
  openingDate,
  closingDate,
  amountPaid,
  amountRemaining,
  download,
}: Props) => {
  return (
    <div className="extractItem">
      <p className="item id">{id}</p>
      <p className="item invoiceName">{invoiceName}</p>
      <p className="item openingDate">{openingDate}</p>
      <p className="item closingDate">{closingDate}</p>
      <p className="item amountPaid">R${amountPaid}</p>
      <p className="item amountRemaining">R${amountRemaining}</p>
      <p className="item download">
        <img width={20} src={downloadIcon} alt="Download Icon" />
        <a download="invoice" href={download}>
          Download PDF
        </a>
      </p>
    </div>
  );
};

export default ExtractItem;
