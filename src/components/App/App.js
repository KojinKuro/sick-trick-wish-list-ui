import React, { useEffect, useState } from "react";
import { getTricks } from "../../utils/apiCalls";
import Tricks from "../Tricks/Tricks";
import "./App.css";

function App() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    getTricks().then(setTricks);
  }, []);

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <main>
        <Tricks tricks={tricks} />
      </main>
    </div>
  );
}

export default App;
