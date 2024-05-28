import PropTypes from "prop-types";
import "./Trick.css";

export default function Trick({ trick, removeTrick }) {
  const { stance, name, obstacle, tutorial, id } = trick;
  return (
    <div className="trick">
      <button onClick={() => removeTrick(id)}>X</button>
      <div>
        {stance} {name}
      </div>
      <div>Obstacle: {obstacle}</div>
      <div>Link to Tutorial:</div>
      <a href={tutorial}>{tutorial}</a>
    </div>
  );
}

Trick.propTypes = {
  trick: PropTypes.shape({
    stance: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    obstacle: PropTypes.string.isRequired,
    tutorial: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
