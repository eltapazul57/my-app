import React, { useEffect, useState } from "react";
import { getRobots } from "../services/robotService";
import { FormattedMessage } from "react-intl"; 

const RobotList = ({ onSelectRobot }) => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRobots();
      setRobots(data);
    };
    fetchData();
  }, []);

  return (
    <div className="col-md-6">
      <table className="table table-striped text-center">
        <thead className="table-dark">
          <tr>
            <th><FormattedMessage id="id" /></th>
            <th><FormattedMessage id="name" /></th>
            <th><FormattedMessage id="model" /></th>
            <th><FormattedMessage id="manufacturer" /></th>
          </tr>
        </thead>
        <tbody>
          {robots.map((robot) => (
            <tr key={robot.id} onClick={() => onSelectRobot(robot.id)} style={{ cursor: "pointer" }}>
              <td>{robot.id}</td>
              <td>{robot.nombre}</td>
              <td>{robot.modelo}</td>
              <td>{robot.empresaFabricante}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RobotList;
