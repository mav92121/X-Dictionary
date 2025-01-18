import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState(""); // For user input
  const [definition, setDefinition] = useState(""); // For displaying definition

  // Dictionary words and their meanings
  const words = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  // Handles the search button click or "Enter" key press
  const handleSearch = () => {
    if (text.trim() === "") {
      setDefinition("Word not found in the dictionary."); // Default for empty input
      return;
    }

    // Find the word in the dictionary (case-insensitive)
    const word = words.find((w) => w.word.toLowerCase() === text.toLowerCase());
    if (word) {
      setDefinition(word.meaning); // Set the definition if found
    } else {
      setDefinition("Word not found in the dictionary."); // Not found
    }
  };

  // Handle pressing "Enter" in the input field
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-10">
      <h1 style={{ marginBottom: "10px" }}>Dictionary App</h1>
      <input
        type="text" // Explicitly set input type for Cypress test
        value={text} // Bind value to state
        onChange={(e) => setText(e.target.value)} // Update state on change
        onKeyDown={handleKeyDown} // Trigger search on "Enter"
        placeholder="Search for a word" // Add a descriptive placeholder
        style={{
          marginBottom: "10px",
          padding: "5px",
          width: "200px",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginBottom: "10px",
          cursor: "pointer",
          padding: "5px 10px",
        }}
      >
        Search
      </button>
      <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Definition:</p>
      <p>{definition}</p>
    </div>
  );
}

export default App;
