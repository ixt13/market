import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/header'
import ItemCard from '../../components/item_card/itemCard'
import AddItem from '../../components/modals/addItem/addItem'
import Log from '../../components/modals/log-reg/log/log'
import { getUserDataById, updateUserInfo } from '../../query/api'
import styles from './profilePage.module.css'
function ProfilePage() {
	const userID = localStorage.getItem('userID')
	const navigate = useNavigate()

	const [lastName, setLastName] = useState('')
	const [name, setName] = useState('')
	const [city, setCity] = useState('')
	const [phone, setPhone] = useState(0)

	const { data } = useQuery(['data', userID], () => getUserDataById(userID), {
		onSuccess: data => {
			setLastName(data.data.lastName)
			setName(data.data.name)
			setPhone(data.data.phone)
			setCity(data.data.city)
		},
	})

	const { mutate } = useMutation(
		['userData', name, lastName, city, phone, userID],
		() => {
			updateUserInfo(name, lastName, city, phone, userID)
		},
		{
			onSuccess: () => {
				console.log('succes')
			},
		}
	)
	const handleUserDataUpdate = () => {
		mutate(name, lastName, city, phone, userID)
	}
	return (
		<div className={styles.wrapper}>
			<Log />
			<AddItem />
			<div className={styles.container}>
				<Header />

				<main className={styles.main}>
					<div className={styles.main__container}>
						<div className={styles.main__container}>
							<div className={styles.main__menu}>
								<form
									onSubmit={e => {
										e.preventDefault()
									}}
									className={styles.menu__form}
									action='#'
								>
									<button
										onClick={() => {
											navigate('/')
										}}
										className={`${styles.menu__btn} ${styles.btn_hov02}`}
										id='btnGoBack'
									>
										Вернуться на главную
									</button>
								</form>
							</div>

							<h2 className={styles.main__h2}>Здравствуйте, Антон!</h2>

							<div className={`${styles.main__profile}`}>
								<div className={styles.profile__content}>
									<h3 className={`${styles.profile__title} ${styles.title}`}>
										Настройки профиля
									</h3>
									<div className={styles.profile__settings}>
										<div className={styles.settings__left}>
											<div className={styles.settings__img}>
												<a href='' target='_self'>
													<img src='#' alt='' />
												</a>
											</div>
											<a
												className={styles.settings__change_photo}
												href=''
												target='_self'
											>
												Заменить
											</a>
										</div>
										<div className={styles.settings__right}>
											<form
												onSubmit={e => {
													e.preventDefault()
												}}
												className={styles.settings__form}
												action='#'
											>
												<div className={styles.settings__div}>
													<label>Имя</label>
													<input
														className={styles.settings__f_name}
														id='settings-fname'
														name='fname'
														type='text'
														placeholder={'Иван'}
														value={lastName ? lastName : ''}
														onChange={e => {
															setLastName(e.target.value)
														}}
													/>
												</div>

												<div className={styles.settings__div}>
													<label>Фамилия</label>
													<input
														className={styles.settings__l_name}
														id='settings-lname'
														name='lname'
														type='text'
														placeholder='Мамаев'
														value={name ? name : ''}
														onChange={e => {
															setName(e.target.value)
														}}
													/>
												</div>

												<div className={styles.settings__div}>
													<label>Город</label>
													<input
														className={styles.settings__city}
														id='settings-city'
														name='city'
														type='text'
														placeholder='Санкт-Петербург'
														value={city ? city : ''}
														onChange={e => {
															setCity(e.target.value)
														}}
													/>
												</div>

												<div className={styles.settings__div}>
													<label>Телефон</label>
													<input
														className={styles.settings__phone}
														id='settings-phone'
														name='phone'
														type='tel'
														placeholder='+79161234567'
														value={phone ? phone : ''}
														onChange={e => {
															setPhone(e.target.value)
														}}
													/>
												</div>

												<button
													onClick={() => {
														handleUserDataUpdate()
													}}
													className={`${styles.settings__btn}  ${styles.btn_hov02}`}
													id='settings-btn'
												>
													Сохранить
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>

							<h3 className='main__title title'>Мои товары</h3>
						</div>

						<div className={styles.main__content}>
							{data
								? data.data.items.map(item => (
										<ItemCard
											key={item._id}
											itemID={item._id}
											userID={item.ID}
											description={item.description}
											name={item.name}
											price={item.price}
											city={item.city}
											images={item.images}
										/>
								  ))
								: ''}
						</div>
					</div>
				</main>

				<footer className={styles.footer}>
					<div className={styles.footer__container}>
						<div className={styles.footer__img}>
							<a href='' target='_self'>
								<img src='img/icon_01.png' alt='home' />
							</a>
						</div>
						<div className={styles.footer__img}>
							<a href='' target='_self'>
								<img src='img/icon_02.png' alt='home' />
							</a>
						</div>
						<div className={styles.footer__img}>
							<a href='' target='_self'>
								<img src='img/icon_03.png' alt='home' />
							</a>
						</div>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default ProfilePage
