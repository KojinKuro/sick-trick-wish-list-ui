import React, { useEffect, useState } from "react";
import { getTricks, postTricks } from "../../utils/apiCalls";
import Form from "../Form/Form";
import Tricks from "../Tricks/Tricks";
import "./App.css";

function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    getTricks().then(setTricks);
  }, []);

  const addTrick = (newTrick) => {
    setTricks((prevTricks) => [...prevTricks, newTrick]);
  };

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <main>
        <Tricks tricks={tricks} />
      </main>
    </div>
  );
}

export default App;
