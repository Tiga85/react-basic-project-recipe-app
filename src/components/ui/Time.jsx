
import './Time.css'
import { useState, useEffect } from "react";

export const Time = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("nl-NL")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("nl-NL"));
    }, 1000);
    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return <h3>{currentTime}</h3>;
};
