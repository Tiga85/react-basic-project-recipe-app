import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export const Time = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("nl-NL")
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString("nl-NL"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <Heading as="h4" size="sm" mt={4} color="darkblue" textAlign="left">
      {currentTime}
    </Heading>
  );
};
