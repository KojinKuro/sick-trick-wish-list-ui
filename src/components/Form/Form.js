import "./Form.css";

export default function Form({ addTrick }) {
  const handleSendIt = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <select>
        <option value="" disabled selected>
          Choose your Stance
        </option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input type="text" placeholder="Name of Trick" />
      <select>
        <option value="" disabled selected>
          Choose your Obstacle
        </option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>
      <input type="text" placeholder="Link to Tutorial" />
      <button onClick={handleSendIt}>Send it!</button>
    </form>
  );
}
