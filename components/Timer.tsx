
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 300));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="bg-yellow-600 text-black py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-center w-full sticky top-0 z-50">
      ⚠️ Warning: VIP Group Access Closing in <span className="font-mono">{formatTime(seconds)}</span> Minutes
    </div>
  );
};

export default Timer;
