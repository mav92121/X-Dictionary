import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [defination, setDefination] = useState("");

  const words = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleSearch = () => {
    const word = words.find((w) => w.word === text);
    if (word) {
      setDefination(word.meaning);
    } else {
      setDefination("Word not found in the dictionary.");
    }
  };

  return (
    <div className="p-10">
      <h1 style={{ marginBottom: "10px" }}>Dictionary App</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for a word"
      />
      <button
        onClick={handleSearch}
        style={{ marginBottom: "10px", cursor: "pointer" }}
      >
        Search
      </button>
      <p style={{ fontWeight: "bold" }}>Defination: </p>
      <p>{defination}</p>
    </div>
  );
}

export default App;
