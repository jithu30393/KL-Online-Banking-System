// Assets
import "./Style.css";
import ExtractItem from "../../components/Extract";

const Extract = () => {
  return (
    <div className="extractPage">
      <div className="logoArea">
        <img
          src="https://www.gnu.org/graphics/gnu-alternative.jpg"
          width={200}
          alt="Logo"
        />
      </div>

      <div className="extractsContainer">
        <header className="extractTitles">
          <p id="item1">ID</p>
          <p id="item2">Invoice Name</p>
          <p id="item3">Opening Date</p>
          <p id="item4">Closing Date</p>
          <p id="item5">Amount Paid</p>
          <p id="item6">Amount Remaining</p>
          <p id="item7">Download</p>
        </header>

        <div style={{ width: "100%" }} className="bar"></div>

        <div className="extractsContent">
          <ExtractItem
            id="1"
            invoiceName="Pay the Car"
            openingDate="18-05-2018"
            closingDate="18-05-2020"
            amountPaid="32,960"
            amountRemaining="1,233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="2"
            invoiceName="Pay the Car"
            openingDate="18-05-2018"
            closingDate="18-05-2020"
            amountPaid="32,960"
            amountRemaining="1,233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="3"
            invoiceName="Pay the Car"
            openingDate="18-05-2018"
            closingDate="18-05-2020"
            amountPaid="32,960"
            amountRemaining="1,233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="4"
            invoiceName="Pay the Car"
            openingDate="18-05-2018"
            closingDate="18-05-2020"
            amountPaid="32,960"
            amountRemaining="1,233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="5"
            invoiceName="Bought Your Mom"
            openingDate="18-05-1820"
            closingDate="18-05-2080"
            amountPaid="39,032,454"
            amountRemaining="4,089,329,058"
            download=""
          />
        </div>
      </div>
    </div>
  );
};

export default Extract;
