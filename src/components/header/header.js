import styles from "./header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <button
          className={`${styles.header__btn_main_enter} ${styles.btn_hov01}`}
        >
          Вход в личный кабинет
        </button>
      </nav>
    </header>
  );
}

export default Header;
