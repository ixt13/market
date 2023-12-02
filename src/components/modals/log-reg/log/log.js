import styles from "./log.module.css";
import modalIcon from "../../../../assets/logo_modal.png";
function Log() {
  return (
    <div class={styles.wrapper}>
      <div class={styles.container_enter}>
        <div class={styles.modal__block}>
          <form class={styles.modal__form_login} id="formLogIn" action="#">
            <div class={styles.modal__logo}>
              <img src={modalIcon} alt="logo" />
            </div>
            <input
              class={`${styles.modal__input} ${styles.login}`}
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              class={`${styles.modal__input} ${styles.password}`}
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button class={styles.modal__btn_enter} id="btnEnter">
              <a href="../index.html">Войти</a>{" "}
            </button>
            <button class={styles.modal__btn_signup} id="btnSignUp">
              <a href="signup.html">Зарегистрироваться</a>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Log;
