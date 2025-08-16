"use client";

import { useEffect, useState } from "react";
import PreLoading from "./pre-loading";

const Progress = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setReady(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!ready) {
    return <PreLoading progress={progress} />;
  }

  return children;
};

export default Progress;
