import React, { useState, useEffect } from "react";
import "./styles.css";
import Navigation from "../../components/navigation/Navigation";
import Card from "../../components/card/card";
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
          <div>
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Принты</div>
          </div>
          <div>
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Постельное белье</div>
          </div>
          <div>
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Комлекты</div>
          </div>
          <div>
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Одежда</div>
          </div>
          <img className="main_header_logo" src="./icons/logo.svg" />
        </div>
      </header>

      <section className="main_section_1">
        <div>
          <div>
            <img src="./images/main.png" alt="" />
            <p>
              Роскошный сон: Подберите идеальное постельное белье для вашего
              дома
            </p>
          </div>
          <div>
            <img src="./images/main_2.png" alt="" />
            <p>
              Нежные ткани, идеальные сны: Ваш выбор постельного белья здесь
            </p>
          </div>
          <div>
            <img src="./images/main_3.png" alt="" />
            <p>
              Создайте уют с лучшим постельным бельем: качество, комфорт, стиль
            </p>
          </div>
          <div>
            <img src="./images/main.png" alt="" />
            <p>Белье, которое дарит сон: коллекция для сладких сновидений</p>
          </div>
        </div>
      </section>

      <section className="main_section_2">
        <div>
          <h1>Собери свой комплект на конструкторе</h1>
          <button>Собрать</button>
        </div>
        <div>
          <Card
            category="Комплект"
            name="Комлект Красный Бархат"
            collection="Бархатное путешествие"
            price="15000"
            className="main_section_2_card"
          />
          <Card
            category="Комплект"
            name="Комлект Желтая Пустыня"
            collection="Пески времени"
            price="19000"
            className="main_section_2_card"
          />
          <Card
            category="Комплект"
            name="Комлект Время Спокойствия"
            collection="Дивные времена"
            price="21000"
            className="main_section_2_card"
          />
          <Card
            category="Комплект"
            name="Комлект Синяя Жемчужина"
            collection="Глубина"
            price="17000"
            className="main_section_2_card"
          />
        </div>
      </section>
      <section className="main_section_3">
        <div>
          <h1>Каталог Mollen</h1>
          <div>
            <ul>
              <li>
                <div />
                <p>Постельное</p>
              </li>
              <li>
                <div />
                <p>Аксессуары</p>
              </li>
            </ul>
            <ul>
              <li>
                <div />
                <p>Одежда</p>
              </li>
              <li>
                <div />
                <p>Принты</p>
              </li>
            </ul>
          </div>
          <div>
            <p>
              “При выборе варианта оплаты наличными, вы дожидаетесь приезда
              курьера и передаёте ему сумму за товар в рублях. Курьер
              предоставляет товар, который можно осмотреть на предмет
              повреждений, соответствие указанным условиям.
            </p>
            <p>
              “При выборе варианта оплаты наличными, вы дожидаетесь приезда
              курьера и передаёте ему сумму за товар в рублях. Курьер
              предоставляет товар, который можно осмотреть на предмет
              повреждений, соответствие указанным условиям.
            </p>
          </div>
        </div>
        <div>
          <img src="./icons/logo.svg" />
        </div>
      </section>
      <section className="main_section_4">
        <img src="./images/main.png" alt="" />

        <img src="./images/main_3.png" alt="" />

        <img src="./images/main.png" alt="" />
        <img src="./images/main_3.png" alt="" />
      </section>
    </div>
  );
};

export default MainPage;
