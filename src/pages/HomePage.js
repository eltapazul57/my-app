import React, { useState } from "react";
import RobotList from "../components/RobotList";
import RobotDetail from "../components/RobotDetail";

const HomePage = () => {
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Adopta un Robot con Robot Lovers!</h2>
      <div className="text-center">
        <img src="/assets/loginImage.png" alt="Robots" className="img-fluid" style={{ maxWidth: "600px" }} />
      </div>

      <div className="row mt-4">
        {/*Se importa el componente d ela lista de robots*/}
        <RobotList onSelectRobot={setSelectedRobotId} />

        {/*Se importa el componente del detalle*/}
        <RobotDetail selectedRobotId={selectedRobotId} />
      </div>

      <footer className="text-center mt-4">
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default HomePage;
