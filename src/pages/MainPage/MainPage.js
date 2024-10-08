import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <main>
        <section className="main_section_1">
          <h1>Навигатор по коллекции</h1>
          <div>
            <MainSubBlock name="special" numb="1">
              Принты
            </MainSubBlock>
            <MainSubBlock name="special" numb="2">
              Готовые решения
            </MainSubBlock>
            <MainSubBlock name="special" numb="3">
              Комплекты
            </MainSubBlock>
            <MainSubBlock name="special" numb="4">
              Одежда
            </MainSubBlock>
            <MainSubBlock name="special" numb="5">
              Акссесуары
            </MainSubBlock>
            <MainSubBlock name="special" numb="6">
              Ароматы
            </MainSubBlock>
          </div>
        </section>
        <section className="main_section_2">
          <h1>Красивое постельное белье в интернет-магазине MOLLEN</h1>
          <div>
            <div>
              <p>
                Mollen — это роскошный текстиль и аксессуары для дома премиум
                класса российского производства.
              </p>
              <p>
                Мы придумали оригинальную идею капсульных коллекций, в которые
                входят постельное белье, домашняя одежда и парфюм. Для создания
                продукции мы используем только натуральные ткани высокого
                качества: египетский хлопок макосатин 400 ТС и плотный шелк 22
                момми.
              </p>
              <p>
                Коллекции Mollen из магазина постельного белья премиум класса
                станет украшением любого домашнего интерьера.
              </p>
              <h5>Функциональный подход</h5>
              <p>
                Все цвета постельного белья, от спокойных до ярких, хорошо
                сочетаются друг с другом в любых комбинациях.
              </p>
            </div>
            <div>
              <h5>Уникальные принты</h5>
              <p>
                В принтах, которые наносятся только на наволочки, используются
                цвета основной линейки. Они разработаны авторами Mollen в
                сотрудничестве московской студией Solstudio Textile Design и
                делают домашний текстиль поистине роскошным: создают акцент в
                интерьере, позволяют добиться идеальной сочетаемости однотонных
                тканей.
              </p>
              <h5>Российский бренд</h5>
              <p>
                Мы создаем комплекты белья и шелковую женскую одежду при участии
                ведущих специалистов страны: МАРХИ, Solstudio, Союз писателей
                России, Nimax и других.
              </p>
            </div>
          </div>
        </section>
        <section className="main_section_3">
          <div className="main_special">
            <div>
              <h1>Коллекция "Композиторы"</h1>
              <p>
                Невозможно представить себе мировую культуру без произведений
                Чайковского, Мусоргского, Рахманинова, Прокофьева: на протяжении
                многих лет симфонии, оперы и романсы русских композиторов
                служили золотым резервом музыкального наследия человечества.
                Русская классическая музыка — неиссякаемый источник вдохновения
                для каждого.
              </p>
              <Link to="/catalog" state={{ category: "special4" }}>
                <button>Подробнее</button>
              </Link>
            </div>
            <video autoPlay loop muted width="600">
              <source src="/videos/special_1.mp4" type="video/mp4" />
              Ваш браузер не поддерживает тег <code>video</code>.
            </video>
          </div>
          <div className="main_special">
            <video autoPlay loop muted width="600">
              <source src="/videos/special_2.mp4" type="video/mp4" />
              Ваш браузер не поддерживает тег <code>video</code>.
            </video>
            <div>
              <h1>Коллекция "Сказки"</h1>
              <p>
                Коллекция «Сказки» — русские сны наяву, эклектичное сочетание
                мотивов традиционного узора разных регионов России. В коллекции
                спрятаны пасхалки, объединяющие сюжетные линии принтов.
                Маленькая птичка Кузябочка то появляется, то прячется в
                хитросплетениях узоров ткани.
              </p>
              <Link to="/catalog" state={{ category: "special1" }}>
                <button>Подробнее</button>
              </Link>
            </div>
          </div>
          <div className="main_special">
            <div>
              <h1>Коллекция "Агиттекстиль"</h1>
              <p>
                Коллекция постельного белья создана в стиле Агиттекстиля
                1920-1930 хх. Наши собиратели льна в летнем поле — своеобразный
                оммаж советским художникам Любови Поповой, Александру Родченко и
                Варваре Степановой. Четкий ритм повторяющихся изображений,
                оригинальная цветовая палитра и эффект оптической иллюзии —
                когда орнамент оказывается составлен из сюжетных сценок с
                участием разных персонажей —главные приметы этого удивительного
                стиля.
              </p>
              <Link to="/catalog" state={{ category: "special2" }}>
                <button>Подробнее</button>
              </Link>
            </div>
            <video autoPlay loop muted width="600" playsInline>
              <source src="/videos/special_3.mp4" type="video/mp4" />
              Ваш браузер не поддерживает тег <code>video</code>.
            </video>
          </div>
        </section>
        <section className="main_section_4">
          <div>
            <h1>Каталог Mollen</h1>
            <div>
              <ul>
                <li>
                  <div />
                  <p>
                    <Link to="/catalog" state={{ category: "bedding" }}>
                      Постельное
                    </Link>
                  </p>
                </li>
                <li>
                  <div />
                  <p>
                    <Link to="/catalog" state={{ category: "acсessories" }}>
                      Аксессуары
                    </Link>
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <div />
                  <p>
                    <Link to="/catalog" state={{ category: "clothes" }}>
                      Одежда
                    </Link>
                  </p>
                </li>
                <li>
                  <div />
                  <p>
                    <Link to="/catalog" state={{ category: "aroma" }}>
                      Ароматы
                    </Link>
                  </p>
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
            <img src="/icons/logo.svg" />
          </div>
        </section>
        <section className="main_section_1">
          <h1>Мы в соцсетях</h1>
          <div>
            <MainSubBlock name="social" numb="1">
              VK
            </MainSubBlock>
            <MainSubBlock name="social" numb="2">
              Pinterest
            </MainSubBlock>
            <MainSubBlock name="social" numb="3">
              Telegram
            </MainSubBlock>
            <MainSubBlock name="social" numb="4">
              Facebook
            </MainSubBlock>
            <MainSubBlock name="social" numb="5">
              Instagram
            </MainSubBlock>
          </div>
        </section>
      </main>
    </div>
  );
};
const MainSubBlock = ({ numb, children, name }) => {
  return (
    <div className="main_section_1_block">
      <img alt="" src={`/images/${name}_${numb}.webp`} />
      <p>{children}</p>
    </div>
  );
};

export default MainPage;
