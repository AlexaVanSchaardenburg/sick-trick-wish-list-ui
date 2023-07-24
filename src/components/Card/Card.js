import './Card.css';

const Card = ({ trick }) => {

  let  { stance, name, obstacle, tutorial } = trick

  return (
    <div className="Card">
      <h2>{`${stance} ${name}`}</h2>
      <p>{`Obstacle: ${obstacle}`}</p>
      <p>Link to Tutorial</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  );
}

export default Card; 