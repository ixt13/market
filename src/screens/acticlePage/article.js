import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import freeImage from '../../assets/icon_03.png'
import logoIcon from '../../assets/logo.png'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { ImageBox } from '../../components/imageBox/imageBox'
import AddItem from '../../components/modals/addItem/addItem'
import Log from '../../components/modals/log-reg/log/log'
import ObjSettigs from '../../components/modals/objectSettings/objSettings'
import Reviews from '../../components/modals/reviews/reviews'
import { deleteItemData, getItemById, getUserDataById } from '../../query/api'
import {
	setIsReviewsModal,
	setIsSettingsModal,
} from '../../redux/slicers/showModals'
import styles from './article.module.css'
function Article() {
	const dispatch = useDispatch()
	const userID = localStorage.getItem('userID')
	const [buttonState, setButtonState] = useState(true)
	const navigate = useNavigate()
	const itemId = localStorage.getItem('itemID')
	const { ID } = useParams()
	const { data, isLoading } = useQuery(['item', itemId], () =>
		getItemById(itemId)
	)

	const deleteItem = useMutation(['deleteItem', itemId], deleteItemData, {
		onSuccess: data => {
			console.log(data)
			navigate(`/myProfile/${userID}`)
		},
	})

	const userData = useQuery(['userData', ID], () => getUserDataById(ID))
	console.log(userData.data)
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
			<Reviews data={userData.data.reviews} ID={ID} />
			<AddItem />
			<Log />
			<ObjSettigs data={data} />
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
											userData && userData.data.city
												? userData.data.city
												: ' не указан'
										}`}</p>
										<div
											onClick={e => {
												dispatch(setIsReviewsModal(true))
											}}
											className={styles.article__link}
											href=''
											target='_blank'
											rel=''
										>
											{userData.data.reviews.length} отзывов
										</div>
									</div>
									<p className={styles.article__price}>
										{data && data.price ? data.price : ''}
									</p>
									<div>
										{ID === localStorage.userID ? (
											<div style={{ display: 'flex', gap: '10px' }}>
												<button
													onClick={() => {
														dispatch(setIsSettingsModal(true))
													}}
													className={`${styles.article__btn} ${styles.btn_hov02}`}
												>
													Редактировать
												</button>
												<button
													onClick={() => {
														deleteItem.mutate(itemId)
														console.log(itemId)
													}}
													className={`${styles.article__btn} ${styles.btn_hov02}`}
												>
													Снять с публикации
												</button>
											</div>
										) : (
											<button
												onClick={() => {
													setButtonState(!buttonState)
												}}
												className={`${styles.article__btn} ${styles.btn_hov02}`}
											>
												Показать телефон
												<span>
													{userData && userData.data.phone && buttonState
														? formattNumber(userData.data.phone, true)
														: userData && userData.data.phone
														? formattNumber(userData.data.phone, false)
														: 'не указан'}
												</span>
											</button>
										)}
									</div>

									<div className={styles.article__author}>
										<div className={styles.author__img}>
											<img
												src={
													userData && userData.data.avatar
														? userData.data.avatar
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
												{userData && userData.data.name
													? userData.data.name
													: ''}
											</p>
											<p className={styles.author__about}>
												на сайте с{' '}
												{userData && userData.data.createdAt
													? userData.data.createdAt
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
