import ItemCard from "../../components/item_card/itemCard";
import styles from "./profilePage.module.css";
import imageIMG from "../../assets/icon_03.png";
import menuLogo from "../../assets/logo.png";
function ProfilePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.header__nav}>
            <div className={styles.header__logo}>
              <a className={styles.logo_mob__link} href="#" target="_blank">
                <img
                  className={styles.logo_mob__img}
                  src={imageIMG}
                  alt="logo"
                />
              </a>
            </div>
            <button
              className={`${styles.header__btn_putAd}  ${styles.btn_hov01}`}
            >
              Разместить объявление
            </button>
            <button className={`${styles.header__btn_lk} ${styles.btn_hov01}`}>
              Личный кабинет
            </button>
          </nav>
        </header>

        <main className={styles.main}>
          <div className={styles.main__container}>
            <div className={styles.main__container}>
              <div className={styles.main__menu}>
                <a className={styles.menu__logo_link} href="" target="_blank">
                  <img
                    className={styles.menu__logo_img}
                    src={menuLogo}
                    alt="logo"
                  />
                </a>
                <form class={styles.menu__form} action="#">
                  <button
                    class={`${styles.menu__btn} ${styles.btn_hov02}`}
                    id="btnGoBack"
                  >
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>

              <h2 className={styles.main__h2}>Здравствуйте, Антон!</h2>

              <div class={`${styles.main__profile}`}>
                <div class={styles.profile__content}>
                  <h3 class={`${styles.profile__title} ${styles.title}`}>
                    Настройки профиля
                  </h3>
                  <div class={styles.profile__settings}>
                    <div class={styles.settings__left}>
                      <div class={styles.settings__img}>
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                      <a
                        class={styles.settings__change_photo}
                        href=""
                        target="_self"
                      >
                        Заменить
                      </a>
                    </div>
                    <div class={styles.settings__right}>
                      <form class={styles.settings__form} action="#">
                        <div class={styles.settings__div}>
                          <label for="fname">Имя</label>
                          <input
                            class={styles.settings__f_name}
                            id="settings-fname"
                            name="fname"
                            type="text"
                            value="Ан"
                            placeholder=""
                          />
                        </div>

                        <div class={styles.settings__div}>
                          <label for="lname">Фамилия</label>
                          <input
                            class={styles.settings__l_name}
                            id="settings-lname"
                            name="lname"
                            type="text"
                            value="Городецкий"
                            placeholder=""
                          />
                        </div>

                        <div class={styles.settings__div}>
                          <label for="city">Город</label>
                          <input
                            class={styles.settings__city}
                            id="settings-city"
                            name="city"
                            type="text"
                            value="Санкт-Петербург"
                            placeholder=""
                          />
                        </div>

                        <div class={styles.settings__div}>
                          <label for="phone">Телефон</label>
                          <input
                            class={styles.settings__phone}
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            value="89161234567"
                            placeholder="+79161234567"
                          />
                        </div>

                        <button
                          class={`${styles.settings__btn}  ${styles.btn_hov02}`}
                          id="settings-btn"
                        >
                          Сохранить
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <h3 class="main__title title">Мои товары</h3>
            </div>

            <div className={styles.main__content}>
              <div className={styles.cards}>
                <ItemCard />
              </div>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src="img/icon_01.png" alt="home" />
              </a>
            </div>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src="img/icon_02.png" alt="home" />
              </a>
            </div>
            <div className={styles.footer__img}>
              <a href="" target="_self">
                <img src="img/icon_03.png" alt="home" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ProfilePage;
