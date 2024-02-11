import { useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import freeImage from '../../assets/icon_03.png'
import logoIcon from '../../assets/logo.png'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { ImageBox } from '../../components/imageBox/imageBox'
import AddItem from '../../components/modals/addItem/addItem'
import Log from '../../components/modals/log-reg/log/log'
import { getItemById, getUserDataById } from '../../query/api'
import styles from './article.module.css'

function Article() {
	const [buttonState, setButtonState] = useState(true)
	const navigate = useNavigate()
	const itemId = localStorage.getItem('itemID')
	const { ID } = useParams()
	const { data, isLoading } = useQuery(['item', itemId], () =>
		getItemById(itemId)
	)

	const userData = useQuery(['userData', ID], () => getUserDataById(ID))

	const formattNumber = (number, param) => {
		if (param) {
			return number
				.toString()
				.split('')
				.slice(0, 4)
				.concat('-XXXX-XXXX')
				.join('')
		}
		return number.replace(/(\d{3})/g, '$1-')
	}

	if (userData.isLoading === true && isLoading === true) {
	}
	if (userData.isLoading || isLoading) {
		return <div>loading</div>
	}

	return (
		<div className={styles.wrapper}>
			<AddItem />
			<Log />
			<div className={styles.container}>
				<Header />
				<main className={styles.main}>
					<div className={styles.main__container}>
						<div className={styles.main__menu}>
							<a
								onClick={e => e.preventDefault()}
								className={styles.menu__logo_link}
								href=''
								target='_blank'
							>
								<img
									className={styles.menu__logo_img}
									src={logoIcon}
									alt='logo'
								/>
							</a>
							<form className={styles.menu__form} action='#'>
								<button
									onClick={() => {
										navigate('/')
									}}
									className={`${styles.menu__btn_serch} ${styles.btn_hov02}`}
									id='btnGoBack'
								>
									Вернуться на главную
								</button>
							</form>
						</div>
					</div>
					<div className={styles.main__artic}>
						<div className={styles.artic__content}>
							<div className={styles.article__left}>
								<ImageBox data={data} />
							</div>
							<div className={styles.article__right}>
								<div className={styles.article__block}>
									<h3 className={`${styles.article__title}  ${styles.title}`}>
										{data && data.name ? data.name : ''}
									</h3>
									<div className={styles.article__info}>
										<p className={styles.article__date}>{`обновлено ${
											data && data.createdAt ? data.createdAt : ''
										}`}</p>
										<p className={styles.article__city}>{`город ${
											userData && userData.data.data.city
												? userData.data.data.city
												: ' не указан'
										}`}</p>
										<a
											className={styles.article__link}
											href=''
											target='_blank'
											rel=''
										>
											23 отзыва
										</a>
									</div>
									<p className={styles.article__price}>
										{data && data.price ? data.price : ''}
									</p>
									<button
										onClick={() => {
											setButtonState(!buttonState)
										}}
										className={`${styles.article__btn} ${styles.btn_hov02}`}
									>
										Показать телефон
										<span>
											{userData && userData.data.data.phone && buttonState
												? formattNumber(userData.data.data.phone, true)
												: userData && userData.data.data.phone
												? formattNumber(userData.data.data.phone, false)
												: 'не указан'}
										</span>
									</button>
									<div className={styles.article__author}>
										<div className={styles.author__img}>
											<img
												src={
													userData && userData.data.data.avatar
														? userData.data.data.avatar
														: freeImage
												}
												alt='avatar'
												className={styles.userAvatar}
											/>
										</div>
										<div className={styles.author__cont}>
											<p
												onClick={() => {
													navigate(
														`/myProfile/${data && data.ID ? data.ID : ''}`
													)
												}}
												className={styles.author__name}
											>
												{userData && userData.data.data.name
													? userData.data.data.name
													: ''}
											</p>
											<p className={styles.author__about}>
												на сайте с{' '}
												{userData && userData.data.data.createdAt
													? userData.data.data.createdAt
													: '-не указано-'}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.main__container}>
						<h3 className={`${styles.main__title} ${styles.title}`}>
							Описание товара
						</h3>
						<div className={styles.main__content}>
							<p className={styles.main__text}>
								{data && data.description ? data.description : ''}
							</p>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		</div>
	)
}

export default Article
