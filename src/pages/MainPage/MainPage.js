import React, { useState, useEffect } from "react";
import "./styles.css";
const MainPage = () => {
  const [stage, setStage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoaded && stage < 4) {
      let delay = 2000;

      if (stage === 2) {
        delay = 1000;
      } else if (stage === 3) {
        delay = 3000;
      }

      const timer = setTimeout(() => {
        setStage(stage + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, stage]);
  return (
    <div>
      <div className={`preloader stage-${stage}`}>
        <div className="white_preload">
          <div className="white_preload1" />
          <div className="white_preload2" />
        </div>
        <div className="preload_content">
          <div className="black_preload" />
          <p>Бренд Домашнего Текстиля</p>
        </div>
      </div>
      <h1>321321</h1>
    </div>
  );
};

export default MainPage;
