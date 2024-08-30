import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "../../components/header/Header";
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
    if (isLoaded && stage < 5) {
      let delay = 2000;

      if (stage === 2) {
        delay = 1000;
      } else if (stage === 3) {
        delay = 3000;
      } else if (stage === 0) {
        delay = 500;
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

      <header className="main_header">
        <div className="main_header_back" />
        <Header color="white" />
        <div className="main_header_content">
          <div className="main_header_button a">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Принты</div>
          </div>
          <div className="main_header_button b">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Постельное белье</div>
          </div>
          <div className="main_header_button c">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Комлекты</div>
          </div>
          <div className="main_header_button d">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Одежда</div>
          </div>
          <img className="main_header_logo" src="./icons/logo.svg" />
        </div>
      </header>
    </div>
  );
};

export default MainPage;
