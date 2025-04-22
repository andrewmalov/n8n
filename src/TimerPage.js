import React, { useEffect, useState } from 'react';

const HOUR_IN_SECONDS = 3600;

function TimerPage() {
  const [seconds, setSeconds] = useState(HOUR_IN_SECONDS);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((secs) => secs - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, '0')}:${m
      .toString()
      .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{textAlign: 'center', marginTop: '100px'}}>
      <h1>Счётчик: {formatTime(seconds)}</h1>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Пауза' : 'Продолжить'}
      </button>
      <button onClick={() => { setSeconds(HOUR_IN_SECONDS); setIsActive(true); }} style={{marginLeft: '10px'}}>
        Сбросить
      </button>
    </div>
  );
}

export default TimerPage;
