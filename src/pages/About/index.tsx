// Assets
import "./Style.css";
import tux from "../../assets/images/tux.png";
import gentoo from "../../assets/images/gentoo.png";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="aboutContent">
        <div className="aboutTopSide">
          <h1>
            KL Banking is an open-source project created as a university
            assignment with my friends and the JSA community.
          </h1>
          <h2>Created by Me :) & Snehith & Akshay</h2>
          <p>
            Github: <a href="https://github.com/jithu30393">Me</a> |{" "}
            <a href="https://github.com/2300031582">Snehith</a> |{" "}
            <a href="https://github.com/2300031581">Akshay</a>
          </p>
        </div>

        <div className="aboutBottomSide">
          <div className="aboutsArea">
            <img src={tux} alt="Tux Logo" width={100} />
            <h3>
              KL Banking is a simple and secure online banking platform. It
              allows users to manage accounts, make deposits and withdrawals, and
              check live exchange rates for USD and EUR.
            </h3>

            <img
              src="https://www.gnu.org/graphics/gnuhead_plain.svg"
              width={100}
              alt="GNU Logo"
            />
            <h3>
              The project was built collaboratively as part of our academic
              journey. Teamwork, problem-solving, and applying software
              engineering concepts were key in shaping this project.
            </h3>

            <img src={gentoo} width={100} alt="Gentoo Logo" />
            <h3>
              Security is one of the main focuses of KL Banking. All transactions
              are handled with care, aiming to provide users with a reliable and
              safe experience.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
