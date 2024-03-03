import styles from '../reviews.module.css'

export const UserReview = props => {
	return (
		<div className={styles.review__item}>
			<div className={styles.review__left}>
				<div className={styles.review__img}>
					<img src='' alt='' />
				</div>
			</div>
			<div className={styles.review__right}>
				<p className={`${styles.review__name}  ${styles.Reviewsfont_t}`}>
					{props.userName} <span>{props.timeStamp}</span>
				</p>
				<h5 className={`${styles.review__title}  ${styles.font_t}`}>
					Комментарий
				</h5>
				<p className={`${styles.review__text} ${styles.font_t}`}>
					{props.review}
				</p>
			</div>
		</div>
	)
}
