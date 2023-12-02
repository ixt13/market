import styles from "./reviews.module.css";

function Reviews() {
  return (
    <div class={styles.wrapper}>
      <div class={styles.container_bg}>
        <div class={styles.modal__block}>
          <div class={styles.modal__content}>
            <h3 class={styles.modal__title}>Отзывы о товаре</h3>
            <div class={styles.modal__btn_close}>
              <div class={styles.modal__btn_close_line}></div>
            </div>
            <div class={styles.modal__scroll}>
              <form
                class={`${styles.modal__form_newArt} ${styles.form_newArt}`}
                id="formNewArt"
                action="#"
              >
                <div class={styles.form_newArt__block}>
                  <label for="text">Добавить отзыв</label>
                  <textarea
                    class={styles.form_newArt__area}
                    name="text"
                    id="formArea"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  ></textarea>
                </div>
                <button
                  class={`${styles.form_newArt__btn_pub}  ${styles.btn_hov02}`}
                  id="btnPublish"
                >
                  Опубликовать
                </button>
              </form>

              <div class={styles.modal__reviews}>
                <div class={styles.reviews__review}>
                  <div class={styles.review__item}>
                    <div class={styles.review__left}>
                      <div class={styles.review__img}>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div class={styles.review__right}>
                      <p
                        class={`${styles.review__name}  ${styles.Reviewsfont_t}`}
                      >
                        Олег <span>14 августа</span>
                      </p>
                      <h5 class={`${styles.review__title}  ${styles.font_t}`}>
                        Комментарий
                      </h5>
                      <p class={`${styles.review__text} ${styles.font_t}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
