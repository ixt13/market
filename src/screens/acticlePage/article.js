import styles from "./article.module.css";
import logoIcon from "../../assets/logo.png";
import Footer from "../../components/footer/footer";
function Article() {
  return (
    <div class={styles.wrapper}>
      <div class={styles.container}>
        <header class={styles.header}>
          <nav class={styles.header__nav}>
            <div class={styles.header__logo}>
              <a class={styles.logo_mob__link} href="" target="_blank">
                <img
                  class={styles.logo_mob__img}
                  src="img/logo-mob.png"
                  alt="logo"
                />
              </a>
            </div>
            <button class={`${styles.header__btn_putAd} ${styles.btn_hov01}`}>
              Разместить объявление
            </button>
            <button class={`${styles.header__btn_lk} ${styles.btn_hov01}`}>
              Личный кабинет
            </button>
          </nav>
        </header>

        <main class={styles.main}>
          <div class={styles.main__container}>
            <div class={styles.main__menu}>
              <a class={styles.menu__logo_link} href="" target="_blank">
                <img class={styles.menu__logo_img} src={logoIcon} alt="logo" />
              </a>
              <form class={styles.menu__form} action="#">
                <button
                  class={`${styles.menu__btn_serch} ${styles.btn_hov02}`}
                  id="btnGoBack"
                >
                  Вернуться на главную
                </button>
              </form>
            </div>
          </div>

          <div class={styles.main__artic}>
            <div class={styles.artic__content}>
              <div class={styles.article__left}>
                <div class={styles.article__fill_img}>
                  <div class={styles.article__img}>
                    <img src="" alt="" />
                  </div>
                  <div class={styles.article__img_bar}>
                    <div class={styles.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div class={styles.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div class={styles.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div class={styles.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div class={styles.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                    <div class={styles.article__img_bar_div}>
                      <img src="" alt="" />
                    </div>
                  </div>
                  <div class={styles.article__img_bar_mob}>
                    <div
                      class={`${styles.img_bar_mob__circle}   ${styles.circle_active}`}
                    ></div>
                    <div class={styles.img_bar_mob__circle}></div>
                    <div class={styles.img_bar_mob__circle}></div>
                    <div class={styles.img_bar_mob__circle}></div>
                    <div class={styles.img_bar_mob__circle}></div>
                  </div>
                </div>
              </div>
              <div class={styles.article__right}>
                <div class={styles.article__block}>
                  <h3 class={`${styles.article__title}  ${styles.title}`}>
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </h3>
                  <div class={styles.article__info}>
                    <p class={styles.article__date}>Сегодня в 10:45</p>
                    <p class={styles.article__city}>Санкт-Петербург</p>
                    <a
                      class={styles.article__link}
                      href=""
                      target="_blank"
                      rel=""
                    >
                      23 отзыва
                    </a>
                  </div>
                  <p class={styles.article__price}>2 200 ₽</p>
                  <button class={`${styles.article__btn} ${styles.btn_hov02}`}>
                    Показать&nbsp;телефон
                    <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                  </button>
                  <div class={styles.article__author}>
                    <div class={styles.author__img}>
                      <img src="" alt="" />
                    </div>
                    <div class={styles.author__cont}>
                      <p class={styles.author__name}>Кирилл</p>
                      <p class={styles.author__about}>
                        Продает товары с августа 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class={styles.main__container}>
            <h3 class={`${styles.main__title} ${styles.title}`}>
              Описание товара
            </h3>
            <div class={styles.main__content}>
              <p class={styles.main__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default Article;
