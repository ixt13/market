import styles from "./itemCard.module.css";
import imageLogo from "../../assets/icon_03.png";
import { useNavigate } from "react-router-dom";
function ItemCard() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/article");
      }}
      className={styles.cards__item}
    >
      <div className={`${styles.cards__card} ${styles.card}`}>
        <div className={styles.card__image}>
          <img src={imageLogo} alt="picture" />
        </div>
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>
            Ракетка для большого тенниса Triumph Pro ST
          </h3>

          <p className={styles.card__price}>2&nbsp;200&nbsp;₽</p>
          <p className={styles.card__place}>Санкт Петербург</p>
          <p className={styles.card__date}>Сегодня в&nbsp;10:45</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
