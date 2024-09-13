import React, { useState, useEffect } from "react";
import "./styles.css";
const Preloader = () => {
  const [stage, setStage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 7500);

    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (stage < 5) {
      let delay = 2000;

      if (stage === 0) {
        delay = 500;
      } else if (stage === 3) {
        delay = 2500;
      } else if (stage === 2) {
        delay = 1000;
      }

      const timer = setTimeout(() => {
        setStage(stage + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, stage]);
  return (
    <div
      className={`preloader stage-${stage}`}
      onClick={() => {
        setStage(4);
        document.body.style.overflow = "auto";
      }}
    >
      <div className="white_preload">
        <div className="white_preload1" />
        <div className="white_preload2" />
      </div>
      <div className="preload_content">
        <div className="black_preload" />
        <p>Бренд Домашнего Текстиля</p>
      </div>
    </div>
  );
};

export default Preloader;
