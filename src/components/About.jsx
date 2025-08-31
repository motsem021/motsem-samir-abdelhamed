import { useState } from "react";

function About() {
  const [number, setNumber] = useState(null);

  const generateRandom = () => {
    setNumber(Math.floor(Math.random() * 100)); // random 0–99
  };

  return (
    <div>
      <h2>About Component</h2>
      <button onClick={generateRandom}>Generate Random Number</button>
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
}

export default About;
