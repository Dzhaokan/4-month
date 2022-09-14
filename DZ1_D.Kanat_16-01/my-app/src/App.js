import './App.css';

function AboutUs () {
  return (
    <>
      <h1>Abous us</h1>
    </>
  )
}

function Portfolio () {
  return (
    <>
      <h2>Portfolio</h2>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h3 className="Mario">It's me, Mario!</h3>
     <AboutUs/>
     <Portfolio/>
    </div>
  );
}

export default App;
