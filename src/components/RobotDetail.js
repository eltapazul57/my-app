import React, { useEffect, useState } from "react";
import { getRobotById } from "../services/robotService";
import { FormattedMessage } from "react-intl"; // Importar FormattedMessage
import "../styles/RobotDetail.css";

const RobotDetail = ({ selectedRobotId }) => {
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    if (selectedRobotId) {
      const fetchRobot = async () => {
        const data = await getRobotById(selectedRobotId);
        if (data && data.imagen) {
          data.imagen = data.imagen.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
        }
        setRobot(data);
      };
      fetchRobot();
    }
  }, [selectedRobotId]);

  if (!robot) {
    return (
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <p><FormattedMessage id="selectRobot" /></p>
      </div>
    );
  }

  return (
    <div className="col-md-6">
      <div className="card robot-detail-container text-center">
        <div className="card-body">
          <h5 className="card-title">{robot.nombre}</h5>
          <img
            src={robot.imagen}
            alt={robot.nombre}
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <p><strong>→ <FormattedMessage id="yearOfManufacture" />:</strong> {robot.añoFabricacion}</p>
          <p><strong>→ <FormattedMessage id="processingCapacity" />:</strong> {robot.capacidadProcesamiento}</p>
          <p><strong>→ <FormattedMessage id="additionalFeatures" />:</strong> {robot.humor}</p>
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;
