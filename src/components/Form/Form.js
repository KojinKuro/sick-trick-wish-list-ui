import PropTypes from "prop-types";
import { useState } from "react";
import "./Form.css";

export default function Form({ addTrick }) {
  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");

  const handleSendIt = (e) => {
    e.preventDefault();
    const isEmptyString = (text) => text === "";

    if (
      isEmptyString(stance) ||
      isEmptyString(name) ||
      isEmptyString(obstacle) ||
      isEmptyString(tutorial)
    ) {
      return;
    }

    addTrick({
      stance,
      name,
      obstacle,
      tutorial,
    });

    resetForm();
  };

  const resetForm = () => {
    setStance("");
    setName("");
    setObstacle("");
    setTutorial("");
  };

  return (
    <form>
      <select
        className="trick-stance-input"
        onChange={(e) => setStance(e.target.value)}
        value={stance}
      >
        <option value="" disabled>
          Choose your Stance
        </option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input
        className="trick-name-input"
        type="text"
        placeholder="Name of Trick"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        className="trick-obstacle-input"
        onChange={(e) => setObstacle(e.target.value)}
        value={obstacle}
      >
        <option value="" disabled>
          Choose your Obstacle
        </option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>
      <input
        className="trick-tutorial-input"
        type="text"
        placeholder="Link to Tutorial"
        onChange={(e) => setTutorial(e.target.value)}
        value={tutorial}
      />
      <button onClick={handleSendIt}>Send it!</button>
    </form>
  );
}

Form.propTypes = {
  addTrick: PropTypes.func.isRequired,
};
