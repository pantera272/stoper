import { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Timer from "./components/Timer/Timer";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [stop, setStop] = useState('stop');
  
  const [sec, setSec] = useState(0)
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  useEffect(() => {
    if(stop !== 'stop'){
      const interval = setInterval(()=> setTimer(timer => timer + 1), 10);
      return () => clearInterval(interval);
    }
    
  });

  const timeForm = () => {
    const ms = timer;
    
    if (ms === 100){
      setSec(sec => sec + 1);     
      setTimer(0);
    }

    if(sec === 60){
      setMin(min => min + 1);
      setSec(0);
    }

    if(min === 60){
      setHr(hr => hr + 1);
      setMin(0);
    }
  }

  const reset = () => {
    setTimer(0);
    setStop('stop');
    setHr(0);
    setMin(0);
    setSec(0);
  }

  const start = () =>{
    setStop('start');
  }

  const stopbtn = () =>{
    setStop('stop');
  }

  return (
    <div class="container">
      <h1>{timeForm()}</h1>
      <Timer ms={timer} sec={sec} min={min} hr={hr}/>
      <Button action={start}>Start</Button>
      <Button action={stopbtn}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </div>
  );
}

export default App;
