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

  // bug: the server will set ids based on the current trick array length. this means that some tricks will get the same id, causing them both to be deleted. ex: (for a trick array of 3 length, the last trick will have an id of 2. if we remove the first trick and assign a new trick, the last trick and second trick will both have an id of 2)
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
