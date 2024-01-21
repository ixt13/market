import styles from "./main.module.css";
import Header from "../../components/header/header";
import searchLogo from "../../assets/logo.png";

import ItemCard from "../../components/item_card/itemCard";
import Log from "../../components/modals/log-reg/log/log";
import Reg from "../../components/modals/log-reg/reg/reg";
function Main() {
  return (
    <div style={{ minHeight: "100%" }}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Header />

          <main className={styles.main}>
            <div className={styles.main__search}>
              <a className={styles.search__logo_link} href="#" target="_blank">
                <img
                  className={styles.search__logo_img}
                  src={searchLogo}
                  alt="logo"
                />
              </a>

              <form className={styles.search__form} action="#">
                <input
                  className={styles.search__text}
                  type="search"
                  placeholder="Поиск по объявлениям"
                  name="search"
                />
                <input
                  className={styles.search__text_mob}
                  type="search"
                  placeholder="Поиск"
                  name="search-mob"
                />
                <button className={`${styles.search__btn} ${styles.btn_hov02}`}>
                  Найти
                </button>
              </form>
            </div>
            <div className={styles.main__container}>
              <h2 className={styles.main__h2}>Объявления</h2>

              <div className={styles.main__content}>
                <div className={styles.cards}>
                  <ItemCard />
                </div>
              </div>
            </div>
          </main>

          <footer style={{ display: "none" }}>
            <div className="footer__container">
              <div className="footer__img">
                <a href="" target="_self">
                  <img src="img/icon_01.png" alt="home" />
                </a>
              </div>
              <div className="footer__img">
                <a href="" target="_self">
                  <img src="img/icon_02.png" alt="home" />
                </a>
              </div>
              <div className="footer__img">
                <a href="" target="_self">
                  <img src="img/icon_03.png" alt="home" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <Log />
      <Reg />
    </div>
  );
}

export default Main;
