import React, { useEffect, useState } from "react";
import { deleteTrick, getTricks, postTricks } from "../../utils/apiCalls";
import Form from "../Form/Form";
import Tricks from "../Tricks/Tricks";
import "./App.css";

function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    getTricks().then(setTricks);
  }, []);

  const addTrick = (newTrick) => {
    postTricks(newTrick).then((postedTrick) => {
      setTricks((prevTricks) => [...prevTricks, postedTrick]);
    });
  };

  const removeTrick = (id) => {
    deleteTrick(id).then(setTricks);
  };

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick} />
      <main>
        <Tricks tricks={tricks} removeTrick={removeTrick} />
      </main>
    </div>
  );
}

export default App;
