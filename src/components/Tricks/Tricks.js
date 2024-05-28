import PropTypes from "prop-types";
import Trick from "./Trick";
import "./Tricks.css";

export default function Tricks({ tricks, removeTrick }) {
  const tricksElements = tricks.map((trick) => (
    <Trick
      key={`${trick.stance}-${trick.id}`}
      trick={trick}
      removeTrick={removeTrick}
    />
  ));

  return <div className="tricks-container">{tricksElements}</div>;
}

Tricks.propTypes = {
  tricks: PropTypes.arrayOf(
    PropTypes.shape({
      stance: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      obstacle: PropTypes.string.isRequired,
      tutorial: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  removeTrick: PropTypes.func,
};
