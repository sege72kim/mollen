import React from "react";
import "./styles.css";
import Navigation from "../../components/navigation/Navigation";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Preloader from "../../components/preloader/Preloader";
const MainPage = () => {
  return (
    <div>
      <Preloader />
      <header className="main_header">
        <div className="main_header_back" />
        <Navigation color="white" />
        <div className="main_header_content">
          <div>
            <div className="main_header_dot">
              <div />
            </div>
            <div className="main_header_dot_text">Ароматы</div>
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
            <div className="main_header_dot_text">Акссесуары</div>
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
      <main>
        <section className="main_section_1">
          <h1>Специальные коллекции</h1>
          <div>
            <div className="main_section_1_block">
              <img alt="" src="/images/special_1.webp" />
              <p>Сказки</p>
            </div>
            <div className="main_section_1_block">
              <img alt="" src="/images/special_2.webp" />
              <p>Агиттекстиль</p>
            </div>
            <div className="main_section_1_block">
              <img alt="" src="/images/special_3.webp" />
              <p>Узоры</p>
            </div>
            <div className="main_section_1_block">
              <img alt="" src="/images/special_4.webp" />
              <p>Санкт-Петербург</p>
            </div>
            <div className="main_section_1_block">
              <img alt="" src="/images/special_5.webp" />
              <p>Таинства</p>
            </div>
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
                Принты разработанные авторами Mollen в сотрудничестве московской
                студией Solstudio Textile Design, делают домашний текстиль
                поистине роскошным: создают акцент в интерьере, позволяют
                добиться идеальной сочетаемости однотонных тканей
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
              className="main_section_3_card"
            />
            <Card
              category="Комплект"
              name="Комлект Желтая Пустыня"
              collection="Пески времени"
              price="19000"
              className="main_section_3_card"
            />
            <Card
              category="Комплект"
              name="Комлект Время Спокойствия"
              collection="Дивные времена"
              price="21000"
              className="main_section_3_card"
            />
            <Card
              category="Комплект"
              name="Комлект Синяя Жемчужина"
              collection="Глубина"
              price="17000"
              className="main_section_3_card"
            />
          </div>
        </section>
        <section className="main_section_4">
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
                  <p>Ароматы</p>
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
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
