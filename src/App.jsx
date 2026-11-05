import photo from './assets/photo.jpg';

export default function App() {
  return (
    <>
      <main className="page">
        <section className="page__header">
          <div className="page__info">
            <h1 className="page__header--name">Файзуллозода Фатхиддин</h1>
            <p className="page__header--role">Frontend-разработчик</p>
            <div className="page__header--location">
              <span data-i18n="location">Санкт-Петербург</span>
              <span aria-hidden="true">·</span>
              <span data-i18n="age">20 лет</span>
            </div>
          </div>
          <div className="page__photo">
            <img src={photo} alt="Faizullozoda Fathiddin" />
          </div>
        </section>

        <div className='resume__layout'>
          <div className='main__column'>
            <section className='section'>
              <div className='section__job'>
                <h2>Проектный опыт</h2>
                <article className='job'>
                  <div className='job__top'>
                    <h3>
                      <a href="https://github.com/IceCremas/LuxuryCar">LuxuryCar-платформа для бранирования автомобилей</a>
                    </h3>
                    <span className='job-date'>2026</span>
                  </div>
                  <p className='project'>Frontend/Full Stack · учебный проект</p>
                  <p className='job__description'>Платформа для подбора и бронирования автомобилей класса люкс: каталог, детальные карточки и онлайн-заявка.</p>
                  <ul className='job__point'>
                    <li className='job__point1'>Разработал на React каталог автомобилей класса люкс: карточки с изображением, названием, характеристиками и ценой, а также фильтрацию по модели для быстрого подбора.</li>
                    <li className='job__point2'>Реализовал детальную карточку автомобиля с полным описанием и удобным переходом к бронированию, чтобы пользователь мог принять решение без звонков и консультаций.</li>
                    <li className='job__point3'>Интегрировал фронтенд с REST API на Express: загрузка каталога, получение данных автомобиля и отправка бронирований; данные хранятся в PostgreSQL</li>
                  </ul>
                  <p className='project__stack'>React · JavaScript · Vite · CSS Modules</p>
                </article>

                <article className="job">
                  <div className="job__top">
                    <h3>
                      <a href="https://github.com/IceCremas/Furniture-Shop">Furniture Shop — интернет-магазин мебели</a>
                    </h3>
                    <span className="job-date">2026</span>
                  </div>
                  <p className="project">Frontend · учебный проект</p>
                  <p className="job__description">Интернет-магазин мебели на React: каталог товаров, фильтрация по категориям, корзина и модальная карточка товара.</p>
                  <ul className="job__point">
                    <li className="job__point1">Разработал на React каталог товаров: карточки с изображением, названием, описанием и ценой, а также фильтрацию по категориям для быстрого подбора.</li>
                    <li className="job__point2">Реализовал корзину с добавлением и удалением товаров, подсчётом суммы и защитой от дублей, чтобы пользователь мог собрать заказ без перезагрузки страницы.</li>
                    <li className="job__point3">Реализовал модальную карточку товара с открытием и закрытием по клику, а также компонентную структуру: Header, Categories, Items, Footer.</li>
                  </ul>
                  <p className="project__stack">React · JavaScript · CSS</p>
                </article>
              </div>
            </section>

            <section className='section education'>
              <h2>Образование</h2>
              <div className='education__item'>
                <div className='education__content'>
                  <h3>Хекслет Колледж</h3><span className='education__date'>2023 — 2027</span>
                </div>
                <p className='degree'>Специалист · Информационные системы и программирование</p>
                <p className="educationTrack">Направление: Frontend-разработка</p>
              </div>
            </section>

            <section className='section about'>
              <h2 className='about__heading'>Обо мне</h2>
              <p className='about__text'>Frontend-разработчик на React и JavaScript. Создаю интерфейсы с каталогами, фильтрацией и формами; связываю пользовательские сценарии с REST API. В учебных проектах работал с Express.js и PostgreSQL. Открыт к junior-позициям и стажировкам.</p>
              <p className='about__team'>В работе делаю акцент на понятном коде и доведении задач до конца. Самостоятельно разбираюсь с новыми технологиями, читаю чужой код и открыт к обратной связи. Готов учиться в команде и аргументированно обсуждать решения.</p>
              <p className='about__team'>Ищу первую работу, чтобы расти в команде и учиться на реальных задачах. Готов к тестовым заданиям и стажировке.</p>
            </section>


          </div>

          <aside className='sidebar'>
            <section className='section contacts'>
              <h2 className='contacts__heading'>Контакты</h2>
              <a className="contact__item" href="tel:+79919190911"><svg aria-hidden="true"><use href="#icon-phone" /></svg><span>+7 991 919 09-11</span></a>
              <a className="contact__item" href="mailto:feelss4454@gmail.com"><svg aria-hidden="true"><use href="#icon-mail" /></svg><span>feelss4454@gmail.com</span></a>
              <a className="contact__item" href="https://t.me/norm_tak" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true"><use href="#icon-send" /></svg><span>@norm_tak</span></a>
              <a className="contact__item" href="https://github.com/IceCremas" target="_blank" rel="noopener noreferrer"><svg aria-hidden="true"><use href="#icon-github" /></svg><span>github.com/IceCremas</span></a>
            </section>

            <section className='section skilss'>
              <h2 className='skills__heading'>Навыки</h2>
              <h3 className='skills__category'>Frontend</h3>
              <ul className='skills__tags'>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5 / CSS3</li>
                <li>Sass</li>
                <li>Python</li>
                <li>MySql / PosgreSgl</li>
                <li>Node.js</li>
                <li>Vite</li>
                <li>EsLin / Prettier</li>
                <li>REST API</li>
                <li>Git / GitHub</li>
              </ul>
            </section>

            <section class="section learning">
              <h2>Что изучаю</h2>
              <ul class="learning__list">
                <li>TypeScript — типизация в React</li>
                <li>Next.js — SSR и роутинг</li>
                <li>Тестирование — Vitest / React Testing Library</li>
              </ul>
            </section>

            <section className='section languages'>
              <h2 className='languages__heading'>Языки</h2>
              <div className='language__row'><span>Английский</span><span className='language-level'>A2</span></div>
              <div className='language__row'><span>Русский</span><span className='language-level'>C2</span></div>
            </section>
          </aside>
        </div>
      </main>
    </>
  )
}