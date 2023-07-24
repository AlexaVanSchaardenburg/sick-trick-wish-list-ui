import './Card.css';

const Card = ({ thisTrick }) => {

  let  { stance, trick, obstacle, tutorial } = thisTrick

  return (
    <div className="Card">
      <h2>{`${stance} ${trick}`}</h2>
      <p>{`Obstacle: ${obstacle}`}</p>
      <p>Link to Tutorial</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  );
}

export default Card; 