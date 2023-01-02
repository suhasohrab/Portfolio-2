import { useState } from "react";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import "./Experience.css";
import Orange from "Data/data1";
import Freelance from "Data/data2";

function Experience() {
  const [hidden, setHidden] = useState(true);

  return (
    <div id="experience">
    <div className="experience" id="#experience">
        <MKTypography variant="h3" color="dark">Experience</MKTypography>
      <div className="expContainer">
        <aside className="companyName">
          <ul>
            <li className={hidden ? "active" : null} id="orange">
              <MKButton onClick={() => setHidden(true)}>Orange</MKButton>
            </li>

            <li className={hidden ? null : "active"} id="freelance">
              <MKButton onClick={() => setHidden(false)}>Freelance</MKButton>
            </li>
          </ul>
        </aside>

        {!hidden ? <Freelance /> : <Orange />}
      </div>
    </div>
    </div>
  );
}

export default Experience;
