import React, { useEffect, useState } from "react";
import { getRobotById } from "../services/robotService";
import "../styles/RobotDetail.css";


const RobotDetail = ({ selectedRobotId }) => {
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    if (selectedRobotId) {
      const fetchRobot = async () => {
        const data = await getRobotById(selectedRobotId);
        if (data && data.imagen) { //Cambiar la url dd la imagne para que se muestre como debe de ser
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
        <p>Seleccione un robot para ver los detalles.</p>
      </div>
    );
  }

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title">{robot.nombre}</h5>
          <img
            src={robot.imagen}
            alt={robot.nombre}
            className="img-fluid mb-3"
            style={{ maxWidth: "200px" }}
          />
          <p><strong>→ Año de Fabricación:</strong> {robot.añoFabricacion}</p>
          <p><strong>→ Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
          <p><strong>→ Humor:</strong> {robot.humor}</p>
        </div>
      </div>
    </div>
  );
};

export default RobotDetail;
