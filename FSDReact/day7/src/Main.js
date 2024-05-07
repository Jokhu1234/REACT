import React from "react"

const Main = () => {
    const myList = () => {
      const list = ["Ground Beef", "Chicken", "Salmon", "Broccoli", "Potatoes"];
      const n = Math.floor(Math.random() * 4);
      return list[n];
    };
  
    const myClick = () => {
      console.log("You have gotten the first item");
    };
  
    return (
      <main>
        <p> Hello {myName()}</p>
        <button onClick={myClick}>Click Me</button>
      </main>
    );
  };
export default Main;