import './App.css';
import Header from './Components/header.js';
function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="body">
        <div className="log-window">
          <p>&gt;Welcome to (name)!</p>
          <p>&gt;Here are the rules:</p>
        </div>
        <button className="start-button">
          <h1>Start</h1>  
        </button>
      </div>
      
    </div>
  );
}

export default App;
