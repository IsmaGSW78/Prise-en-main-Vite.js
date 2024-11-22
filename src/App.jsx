import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [persons, setPersons] = useState([
    {
      name: "John Doe",
      age: 28,
    },
    {
      name: "Renekton Lux",
      age: 18,
    },
    {
      name: "Vladamir Zeri",
      age: 8,
    },
  ]);

  const sortByName = () => {
    const sortedByName = [...persons].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setPersons(sortedByName);
  };

  const sortByAge = () => {
    const sortedByAge = [...persons].sort((a, b) => a.age - b.age);
    setPersons(sortedByAge);
  };

  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(randomIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ cursor: count === 10 ? "not-allowed" : "pointer" }}
          disabled={count === 10}
        >
          +
        </button>
        <button onClick={() => setCount(0)}>reset</button>
        <button
          onClick={() => setCount((count) => count - 1)}
          style={{ cursor: count === -10 ? "not-allowed" : "pointer" }}
          disabled={count === -10}
        >
          -
        </button>
        <p>{count % 2 === 0 ? "Paire" : "Impaire"}</p>
        <p>{count}</p>
        <button>{quotes[currentQuote]}</button>
      </div>
      <div>
        <h2>Tableau des personnes</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={sortByName}>Trier par nom</button>
        <button onClick={sortByAge}>Trier par âge</button>
      </div>
    </>
  );
}

export default App;
