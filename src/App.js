import logo from './logo.svg';
import './App.css';
import Header from './Components/header.js';
import Stocks from "./Stocks.js";
function App() {
  return (
    <div className="App">
      
      <Header />
      <div className="body">
        <div className="log-window">
        
        </div>
        <button className="start-button">
          <h1>Start</h1>  
        </button>
      </div>
      
      


    </div>
  );
}

export default App;
