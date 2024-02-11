import { useState } from 'react'
import imageLogo from '../../assets/delete_1837632.png'
import styles from '../../screens/acticlePage/article.module.css'
export const ImageBox = props => {
	const [bigPhotoURL, setbigPhotoURL] = useState('')
	const [selected, setSelected] = useState('')

	const selectedImage = e => {
		setSelected(e.target.src)
	}

	return (
		<div className={styles.article__fill_img}>
			<div className={styles.article__img}>
				<img
					src={
						bigPhotoURL && bigPhotoURL.photo
							? bigPhotoURL.photo
							: props.data && props.data.images[0]
							? props.data.images[0].photo
							: imageLogo
					}
					alt='Изображение товара'
					style={{ width: '100%', height: '100%' }}
				/>
			</div>
			<div className={styles.article__img_bar}>
				<div className={styles.article__img_bar_div}>
					<img
						onClick={e => {
							setbigPhotoURL(props.data.images[0])
							selectedImage(e)
						}}
						src={
							props.data && props.data.images[0]
								? props.data.images[0].photo
								: imageLogo
						}
						alt='Изображение товара'
						style={{
							width: '100%',
							height: '100%',
							outline:
								props.data &&
								props.data.images[0] &&
								selected === props.data.images[0].photo
									? '5px solid #0784e4'
									: 'none',
						}}
					/>
				</div>
				<div className={styles.article__img_bar_div}>
					<img
						onClick={e => {
							setbigPhotoURL(props.data.images[1])
							selectedImage(e)
						}}
						src={
							props.data && props.data.images[1]
								? props.data.images[1].photo
								: imageLogo
						}
						alt='Изображение товара'
						style={{
							width: '100%',
							height: '100%',
							outline:
								props.data &&
								props.data.images[1] &&
								selected === props.data.images[1].photo
									? '5px solid #0784e4'
									: 'none',
						}}
					/>
				</div>
				<div className={styles.article__img_bar_div}>
					<img
						onClick={e => {
							setbigPhotoURL(props.data.images[2])
							selectedImage(e)
						}}
						src={
							props.data && props.data.images[2]
								? props.data.images[2].photo
								: imageLogo
						}
						alt='Изображение товара'
						style={{
							width: '100%',
							height: '100%',
							outline:
								props.data &&
								props.data.images[2] &&
								selected === props.data.images[2].photo
									? '5px solid #0784e4'
									: 'none',
						}}
					/>
				</div>
				<div className={styles.article__img_bar_div}>
					<img
						onClick={e => {
							setbigPhotoURL(props.data.images[3])
							selectedImage(e)
						}}
						src={
							props.data && props.data.images[3]
								? props.data.images[3].photo
								: imageLogo
						}
						alt='Изображение товара'
						style={{
							width: '100%',
							height: '100%',
							outline:
								props.data &&
								props.data.images[3] &&
								selected === props.data.images[3].photo
									? '5px solid #0784e4'
									: 'none',
						}}
					/>
				</div>
				<div className={styles.article__img_bar_div}>
					<img
						onClick={e => {
							setbigPhotoURL(props.data.images[4])
							selectedImage(e)
						}}
						src={
							props.data && props.data.images[4]
								? props.data.images[4].photo
								: imageLogo
						}
						alt='Изображение товара'
						style={{
							width: '100%',
							height: '100%',
							outline:
								props.data &&
								props.data.images[4] &&
								selected === props.data.images[4].photo
									? '5px solid #0784e4'
									: 'none',
						}}
					/>
				</div>
			</div>
			<div className={styles.article__img_bar_mob}>
				<div
					className={`${styles.img_bar_mob__circle}   ${styles.circle_active}`}
				></div>
				<div className={styles.img_bar_mob__circle}></div>
				<div className={styles.img_bar_mob__circle}></div>
				<div className={styles.img_bar_mob__circle}></div>
				<div className={styles.img_bar_mob__circle}></div>
			</div>
		</div>
	)
}
