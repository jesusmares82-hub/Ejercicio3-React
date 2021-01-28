import React, { useState } from "react";

const Conversor = (event) => {
  const [isDegrees, setDegrees] = useState(false);
  const [isRadians, setRadians] = useState(false);

  const handleDegrees = (eventDegree) => {
    const valueDegree = eventDegree.target.value;
    document.getElementById("degrees").value = valueDegree * 57.296;
    setDegrees(true);
    setRadians(false);
  };

  const handleRadians = (eventRadian) => {
    const valueRadian = eventRadian.target.value;
    document.getElementById("radians").value = valueRadian * 0.01745;
    setDegrees(false);
    setRadians(true);
  };

  return (
    <div>
      <p>
        Convirtiendo de
        {isDegrees ? " Radianes" : isRadians ? " Grados" : " -"} a
        {isRadians ? " Radianes" : isDegrees ? " Grados" : " - "}
      </p>
      <h2 className="mb">Radianes:</h2>
      <input onChange={handleDegrees} id="radians" />
      <h2 className="mt mb">Grados:</h2>
      <input onChange={handleRadians} id="degrees" />
    </div>
  );
};

export default Conversor;
