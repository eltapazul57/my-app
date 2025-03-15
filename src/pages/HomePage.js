import React, { useState } from "react";
import { FormattedMessage } from "react-intl"; // Importar FormattedMessage
import RobotList from "../components/RobotList";
import RobotDetail from "../components/RobotDetail";

const HomePage = () => {
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  return (
    <div className="container mt-4">
      <h2 className="text-center">
        <FormattedMessage id="adoptTitle" /> {/* Traducción automática */}
      </h2>
      <div className="text-center">
        <img src="/assets/loginImage.png" alt="Robots" className="img-fluid" style={{ maxWidth: "600px" }} />
      </div>

      <div className="row mt-4">
        <RobotList onSelectRobot={setSelectedRobotId} />
        <RobotDetail selectedRobotId={selectedRobotId} />
      </div>

      <footer className="text-center mt-4">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default HomePage;
