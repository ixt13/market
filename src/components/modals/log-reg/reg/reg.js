import styles from "./reg.module.css";
import modalIcon from "../../../../assets/logo_modal.png";
function Reg() {
  return (
    <div class={styles.wrapper}>
      <div class={styles.container_signup}>
        <div class={styles.modal__block}>
          <form class={styles.modal__form_login} id="formLogUp" action="#">
            <div class={styles.modal__logo}>
              <img src={modalIcon} alt="logo" />
            </div>
            <input
              class={styles.modal__input}
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
            />
            <input
              class={styles.modal__input}
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <input
              class={styles.modal__input}
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <input
              class={styles.modal__input}
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
            />
            <input
              class={styles.modal__input}
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
            />
            <input
              class={styles.modal__input}
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
            />
            <button class={styles.modal__btn_signup_ent} id="SignUpEnter">
              <a href="../index.html">Зарегистрироваться</a>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Reg;
