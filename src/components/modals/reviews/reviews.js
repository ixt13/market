import styles from "./reviews.module.css";

function Reviews() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container_bg}>
        <div className={styles.modal__block}>
          <div className={styles.modal__content}>
            <h3 className={styles.modal__title}>Отзывы о товаре</h3>
            <div className={styles.modal__btn_close}>
              <div className={styles.modal__btn_close_line}></div>
            </div>
            <div className={styles.modal__scroll}>
              <form
                className={styles.modal__form_newArt}
                id="formNewArt"
                action="#"
              >
                <div className={styles.form_newArt__block}>
                  <div className={styles.formArea_label}>Добавить отзыв</div>
                  <textarea
                    className={styles.form_newArt__area}
                    name="text"
                    id="text"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                  ></textarea>
                </div>
                <button
                  className={`${styles.form_newArt__btn_pub} ${styles.btn_hov02}`}
                  id="btnPublish"
                >
                  Опубликовать
                </button>
              </form>
              <div className={styles.modal__reviews}>
                <div className={styles.reviews__review}>
                  <div className={styles.review__item}>
                    <div className={styles.review__left}>
                      <div className={styles.review__img}>
                        <img src="" alt="" />
                      </div>
                    </div>
                    <div className={styles.review__right}>
                      <p
                        className={`${styles.review__name}  ${styles.Reviewsfont_t}`}
                      >
                        Олег <span>14 августа</span>
                      </p>
                      <h5
                        className={`${styles.review__title}  ${styles.font_t}`}
                      >
                        Комментарий
                      </h5>
                      <p className={`${styles.review__text} ${styles.font_t}`}>
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
