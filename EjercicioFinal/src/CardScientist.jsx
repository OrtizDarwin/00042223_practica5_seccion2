// src/components/CardScientist.jsx
import "./CardScientist.css"; 

const CardScientist = ({ name, image, profession, awards, discoveries }) => {
  return (
    <div className="card-scientist">
      <h2>{name}</h2>
      <img src={image} alt={name} className="card-image" />
      <ul>
        <li><strong>Profesión:</strong> {profession}</li>
        <li><strong>Premios:</strong> {awards}</li>
        <li><strong>Descubrió:</strong> {discoveries}</li>
      </ul>
    </div>
  );
};

export default CardScientist;