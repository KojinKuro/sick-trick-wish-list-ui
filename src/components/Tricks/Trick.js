import "./Trick.css";

export default function Trick({ trick }) {
  const { stance, name, obstacle, tutorial, id } = trick;
  return (
    <div className="trick">
      <div>
        {stance} {name}
      </div>
      <div>Obstacle: {obstacle}</div>
      <div>Link to Tutorial:</div>
      <a href={tutorial}>{tutorial}</a>
    </div>
  );
}
