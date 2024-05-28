import Trick from "./Trick";

export default function Tricks({ tricks }) {
  const tricksElements = tricks.map((trick) => (
    <Trick key={trick.id} trick={trick} />
  ));

  return <div className="tricks-container">{tricksElements}</div>;
}
