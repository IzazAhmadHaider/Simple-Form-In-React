import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(" ");
  const [fname, setFname] = useState(" ");

  function namechange(e) {
    setName(e.target.value);
  }
  function fnamechange(e) {
    setFname(e.target.value);
  }

  function getform() {
    const nameValue = name;
    const fnameValue = fname;
 
      const message = `: ${nameValue}, Father Name: ${fnameValue}`;
      document.getElementById("newedit").textContent = message;
    
  }
  

  return (
    <>
      <div>
        <form>
          <label htmlFor="Name">Name:</label>
          <input type="text" name="Name " value={name} onChange={namechange} id="name" />
          <label htmlFor="Father Name">Father Name:</label>
          <input type="text" name="Father Name" value={fname} onChange={fnamechange} id="fname" />
        </form>
        <button id="btn" onClick={getform}>
          Submit
        </button>
      </div>
      <p id="newedit"></p>
    </>
  );
}

export default App;
