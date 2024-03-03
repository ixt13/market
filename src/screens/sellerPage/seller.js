import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import menuLogo from '../../assets/logo.png'
import Header from '../../components/header/header'
import ItemCard from '../../components/item_card/itemCard'
import AddItem from '../../components/modals/addItem/addItem'
import Log from '../../components/modals/log-reg/log/log'
import { getUserDataById } from '../../query/api'
import styles from './seller.module.css'
function SellerPage() {
	const navigate = useNavigate()
	const { ID } = useParams()
	const { data } = useQuery(['data', ID], () => getUserDataById(ID), {
		onSuccess: data => {
			console.log(data)
		},
	})
	return (
		<div className={styles.wrapper}>
			<Log />
			<AddItem />
			<div className={styles.container}>
				<Header />
				<main className={styles.main}>
					<div className={styles.main__container}>
						<div className={styles.main__center_block}>
							<div className={styles.main__menu}>
								<a className={styles.menu__logo_link} href='' target='_blank'>
									<img
										className={styles.menu__logo_img}
										src={menuLogo}
										alt='logo'
									/>
								</a>
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

							<h2 className={styles.main__h2}>Профиль продавца</h2>

							<div className={styles.main__profile_sell}>
								<div className={styles.profile_sell__content}>
									<div className={styles.profile_sell__seller}>
										<div className={styles.seller__left}>
											<div className={styles.seller__img}>
												<a href='' target='_self'>
													<img src='#' alt='' />
												</a>
											</div>
										</div>
										<div className={styles.seller__right}>
											<h3 className={styles.seller__title}>Кирилл Матвеев</h3>
											<p className={styles.seller__city}>Санкт-Петербург</p>
											<p className={styles.seller__inf}>
												Продает товары с августа 2021
											</p>

											<div className={styles.seller__img_mob_block}>
												<div className={styles.seller__img_mob}>
													<a href='' target='_self'>
														<img src='#' alt='' />
													</a>
												</div>
											</div>

											<button
												className={`${styles.seller__btn} ${styles.btn_hov02}`}
											>
												Показать&nbsp;телефон
												<span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
											</button>
										</div>
									</div>
								</div>
							</div>

							<h3 className={styles.main__title}>Товары продавца</h3>
						</div>
						<div className={styles.main__content}>
							<div className={styles.cards}>
								{data
									? data.items.map(item => (
											<ItemCard
												key={item._id}
												itemID={item._id}
												userID={item.ID}
												description={item.description}
												name={item.name}
												price={item.price}
												city={item.city}
												images={item.images}
												updatedAt={item.createdAt}
											/>
									  ))
									: ''}
							</div>
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

export default SellerPage
