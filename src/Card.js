import Conversor from "./Conversor.js";

const Card = ({ bgColor }) => {
  return (
    <div className="Card" style={{ backgroundColor: bgColor }}>
      <div className="card">
        <Conversor />
      </div>
    </div>
  );
};

export default Card;
