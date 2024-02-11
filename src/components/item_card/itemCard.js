import { useNavigate } from 'react-router-dom'
import addImage from '../../assets/icon_03.png'
import styles from './itemCard.module.css'
function ItemCard(props) {
	const navigate = useNavigate()

	return (
		<div
			onClick={() => {
				navigate(`/article/${props.userID}`)
				localStorage.setItem('itemID', props.itemID)
			}}
			className={styles.cards__item}
		>
			<div className={`${styles.cards__card} ${styles.card}`}>
				<div className={styles.card__image}>
					<img
						src={props.images.length ? props.images[0].photo : addImage}
						alt='picture'
					/>
				</div>
				<div className={styles.card__content}>
					<h3 className={styles.card__title}>{props.name}</h3>

					<p className={styles.card__price}>{props.price}</p>
					<p className={styles.card__place}>{props.city}</p>
					<p className={styles.card__date}>{`обновлено ${props.updatedAt}`}</p>
				</div>
			</div>
		</div>
	)
}

export default ItemCard
