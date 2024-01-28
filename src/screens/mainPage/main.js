import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import searchLogo from '../../assets/logo.png'
import Header from '../../components/header/header'
import ItemCard from '../../components/item_card/itemCard.js'
import AddItem from '../../components/modals/addItem/addItem'
import Log from '../../components/modals/log-reg/log/log'
import Reg from '../../components/modals/log-reg/reg/reg'
import { getAllPosts } from '../../query/api'
import styles from './main.module.css'
function Main() {
	const dispatch = useDispatch()
	const { data, isLoading, error } = useQuery('posts', getAllPosts)

	if (isLoading) {
		return <div>is loading</div>
	}
	return (
		<div style={{ minHeight: '100%' }}>
			<div className={styles.wrapper}>
				<AddItem />
				<div className={styles.container}>
					<Header />

					<main className={styles.main}>
						<div className={styles.main__search}>
							<a className={styles.search__logo_link} href='#' target='_blank'>
								<img
									className={styles.search__logo_img}
									src={searchLogo}
									alt='logo'
								/>
							</a>

							<form className={styles.search__form} action='#'>
								<input
									className={styles.search__text}
									type='search'
									placeholder='Поиск по объявлениям'
									name='search'
								/>
								<input
									className={styles.search__text_mob}
									type='search'
									placeholder='Поиск'
									name='search-mob'
								/>
								<button className={`${styles.search__btn} ${styles.btn_hov02}`}>
									Найти
								</button>
							</form>
						</div>
						<div className={styles.main__container}>
							<h2 className={styles.main__h2}>Объявления</h2>

							<div className={styles.main__content}>
								<div className={styles.cards}>
									{data.map(item => (
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
									))}
								</div>
							</div>
						</div>
					</main>

					<footer style={{ display: 'none' }}>
						<div className='footer__container'>
							<div className='footer__img'>
								<a href='' target='_self'>
									<img src='img/icon_01.png' alt='home' />
								</a>
							</div>
							<div className='footer__img'>
								<a href='' target='_self'>
									<img src='img/icon_02.png' alt='home' />
								</a>
							</div>
							<div className='footer__img'>
								<a href='' target='_self'>
									<img src='img/icon_03.png' alt='home' />
								</a>
							</div>
						</div>
					</footer>
				</div>
			</div>
			<Log />
			<Reg />
		</div>
	)
}

export default Main
