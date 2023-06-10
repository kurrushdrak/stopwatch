
import './App.css';

function App() {
  const StartButton=()=>{

  }
  const RestartButton=()=>{

  }
  const StopButton=()=>{

  }
  return (
    <div className="App">
     <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="timer">
        <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "style={{marginRight:5}}/><span>Timer</span>
        <h1>00:00</h1>
        <button className='btn btn-primary' style={{marginRight:10}} onClick={StartButton}>Start</button>
        <button className='btn btn-warning' style={{marginRight:10}} onClick={RestartButton}>Restart</button>
        <button className='btn btn-danger' style={{marginRight:10}} onClick={StopButton}>Stop</button>
      </div>
     </div>
       
    </div>
  );
}

export default App;
