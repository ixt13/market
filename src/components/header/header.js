import styles from "./header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsLogModal } from "../../redux/slicers/showModals";
import { setIsAddItemModal } from "../../redux/slicers/showModals";
function Header() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.authentification.authStatus);
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        {isAuth ? (
          <div>
            <button
              onClick={() => {
                dispatch(setIsAddItemModal(true));
              }}
              className={`${styles.header__btn_putAd} ${styles.btn_hov01}`}
            >
              Разместить объявление
            </button>
            <button className={`${styles.header__btn_lk} ${styles.btn_hov01}`}>
              Личный кабинет
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              dispatch(setIsLogModal(true));
            }}
            className={`${styles.header__btn_main_enter} ${styles.btn_hov01}`}
          >
            Вход в личный кабинет
          </button>
        )}
      </nav>
    </header>
  );
}

export default Header;
