import styles from "./footer.module.css";
import icon01 from "../../assets/icon_01.png";
import icon02 from "../../assets/icon_02.png";
import icon03 from "../../assets/icon_03.png";
function Footer() {
  return (
    <footer class={styles.footer}>
      <div class={styles.footer__container}>
        <div class={styles.footer__img}>
          <a href="" target="_self">
            <img src={icon01} alt="home" />
          </a>
        </div>
        <div class={styles.footer__img}>
          <a href="" target="_self">
            <img src={icon02} alt="home" />
          </a>
        </div>
        <div class={styles.footer__img}>
          <a href="" target="_self">
            <img src={icon03} alt="home" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
