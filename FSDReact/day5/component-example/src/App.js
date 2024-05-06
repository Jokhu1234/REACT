

function App() {
  
  const nameChange = () => {
    const name = ["Sadeed", "Amber", "Charlaine", "Suze", "Syed", "Salah", "Fatemeh", "Jonathon"];
    const n = Math.floor(Math.random() * 8);
 
    return name[n];
    console.log(n);
  };

  return (
    <div className="App">
     <h1>Welcome {nameChange()}
     </h1>
    </div>
  );
}

export default App;
