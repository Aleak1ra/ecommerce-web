"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const Loading = () => {
  const [progressValue, setProgressValue] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prevValue) => (prevValue < 100 ? prevValue + 10 : 100));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Progress value={progressValue} style={{ height: "10px", width: "50%" }} />
    </div>
  );
};

export default Loading;
