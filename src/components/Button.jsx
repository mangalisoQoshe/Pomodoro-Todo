import  { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (isRunning && time > 0) {
      const intervalId = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (isRunning && time === 0) {
      setIsRunning(false);
      alert('Countdown completed!');
    }
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    setTime(parseInt(inputValue) * 60);
    setInputValue('');
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <label>
          Set number of minutes:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Set</button>
      </form>
      <div>
        <h1>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        {!isRunning && (
          <button onClick={handleStart} disabled={time === 0}>
            Start
          </button>
        )}
        {isRunning && (
          <button onClick={handleStop}>
            Stop
          </button>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;
