import React, { useState, useEffect } from "react";
import "./styles.css";
import Navigation from "../../components/navigation/Navigation";
const MainPage = () => {
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
        <Navigation color="white" />
        <div className="main_header_content">
          <div className="main_header_button dota">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Принты</div>
          </div>
          <div className="main_header_button dotb">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Постельное белье</div>
          </div>
          <div className="main_header_button dotc">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Комлекты</div>
          </div>
          <div className="main_header_button dotd">
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Одежда</div>
          </div>
          <img className="main_header_logo" src="./icons/logo.svg" />
        </div>
      </header>

      <section className="main_section_1">
        <div className="main_section_1_div">
          <div className="main_section_1_group msg1">
            <img src="./images/main.png" alt="" />
            <p>
              Роскошный сон: Подберите идеальное постельное белье для вашего
              дома
            </p>
          </div>
          <div className="main_section_1_group msg2">
            <img src="./images/main_2.png" alt="" />
            <p>
              Нежные ткани, идеальные сны: Ваш выбор постельного белья здесь
            </p>
          </div>
          <div className="main_section_1_group msg3">
            <img src="./images/main_3.png" alt="" />
            <p>
              Создайте уют с лучшим постельным бельем: качество, комфорт, стиль
            </p>
          </div>
          <div className="main_section_1_group msg4">
            <img src="./images/main.png" alt="" />
            <p>Белье, которое дарит сон: коллекция для сладких сновидений</p>
          </div>
        </div>
      </section>

      <section className="main_section_2">
        <div className="main_section_2_div_1">
          <h1>Собери свой комплект на конструкторе</h1>
          <button>Собрать</button>
        </div>
        <div className="main_section_2_div_2"></div>
      </section>
    </div>
  );
};

export default MainPage;
