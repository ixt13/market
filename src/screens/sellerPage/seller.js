import ItemCard from "../../components/item_card/itemCard";
import styles from "./seller.module.css";
import imageIMG from "../../assets/icon_03.png";
import menuLogo from "../../assets/logo.png";
function SellerPage() {
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
            <div className={styles.main__center_block}>
              <div className={styles.main__menu}>
                <a className={styles.menu__logo_link} href="" target="_blank">
                  <img
                    className={styles.menu__logo_img}
                    src={menuLogo}
                    alt="logo"
                  />
                </a>
                <form className={styles.menu__form} action="#">
                  <button
                    className={`${styles.menu__btn} ${styles.btn_hov02}`}
                    id="btnGoBack"
                  >
                    Вернуться на&nbsp;главную
                  </button>
                </form>
              </div>

              <h2 className={styles.main__h2}>Профиль продавца</h2>

              <div className={styles.main__profile_sell}>
                <div className={styles.profile_sell__content}>
                  <div className={styles.profile_sell__seller}>
                    <div className={styles.seller__left}>
                      <div className={styles.seller__img}>
                        <a href="" target="_self">
                          <img src="#" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className={styles.seller__right}>
                      <h3 className={styles.seller__title}>Кирилл Матвеев</h3>
                      <p className={styles.seller__city}>Санкт-Петербург</p>
                      <p className={styles.seller__inf}>
                        Продает товары с августа 2021
                      </p>

                      <div className={styles.seller__img_mob_block}>
                        <div className={styles.seller__img_mob}>
                          <a href="" target="_self">
                            <img src="#" alt="" />
                          </a>
                        </div>
                      </div>

                      <button
                        className={`${styles.seller__btn} ${styles.btn_hov02}`}
                      >
                        Показать&nbsp;телефон
                        <span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className={styles.main__title}>Товары продавца</h3>
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

export default SellerPage;
