import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import freeImage from '../../assets/icon_03.png'
import logoIcon from '../../assets/logo.png'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import AddItem from '../../components/modals/addItem/addItem'
import Log from '../../components/modals/log-reg/log/log'
import { getItemById } from '../../query/api'
import styles from './article.module.css'
function Article() {
	const navigate = useNavigate()
	const itemId = localStorage.getItem('itemID')

	const { data, isLoading } = useQuery(['item', itemId], () =>
		getItemById(itemId)
	)

	if (isLoading) {
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
								<div className={styles.article__fill_img}>
									<div className={styles.article__img}>
										<img
											src={data.images[0] ? data.images[0].photo : freeImage}
											alt='Изображение товара'
											style={{ width: '100%', height: '100%' }}
										/>
									</div>
									<div className={styles.article__img_bar}>
										<div className={styles.article__img_bar_div}>
											<img
												src={data.images[1] ? data.images[1].photo : freeImage}
												alt='Изображение товара'
												style={{ width: '100%', height: '100%' }}
											/>
										</div>
										<div className={styles.article__img_bar_div}>
											<img
												src={data.images[2] ? data.images[2].photo : freeImage}
												alt='Изображение товара'
												style={{ width: '100%', height: '100%' }}
											/>
										</div>
										<div className={styles.article__img_bar_div}>
											<img
												src={data.images[3] ? data.images[2].photo : freeImage}
												alt='Изображение товара'
												style={{ width: '100%', height: '100%' }}
											/>
										</div>
										<div className={styles.article__img_bar_div}>
											<img
												src={data.images[4] ? data.images[2].photo : freeImage}
												alt='Изображение товара'
												style={{ width: '100%', height: '100%' }}
											/>
										</div>
										<div className={styles.article__img_bar_div}>
											<img
												src={data.images[5] ? data.images[2].photo : freeImage}
												alt='Изображение товара'
												style={{ width: '100%', height: '100%' }}
											/>
										</div>
										<div className={styles.article__img_bar_div}>
											<img
												src={data.images[6] ? data.images[2].photo : freeImage}
												alt='Изображение товара'
												style={{ width: '100%', height: '100%' }}
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
							</div>
							<div className={styles.article__right}>
								<div className={styles.article__block}>
									<h3 className={`${styles.article__title}  ${styles.title}`}>
										{data.name}
									</h3>
									<div className={styles.article__info}>
										<p className={styles.article__date}>Сегодня в 10:45</p>
										<p className={styles.article__city}>Санкт-Петербург</p>
										<a
											className={styles.article__link}
											href=''
											target='_blank'
											rel=''
										>
											23 отзыва
										</a>
									</div>
									<p className={styles.article__price}>{data.price}</p>
									<button
										className={`${styles.article__btn} ${styles.btn_hov02}`}
									>
										Показать&nbsp;телефон
										<span>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</span>
									</button>
									<div className={styles.article__author}>
										<div className={styles.author__img}>
											<img src='' alt='' />
										</div>
										<div className={styles.author__cont}>
											<p className={styles.author__name}>Кирилл</p>
											<p className={styles.author__about}>
												Продает товары с августа 2021
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
							<p className={styles.main__text}>{data.description}</p>
						</div>
					</div>
				</main>

				<Footer />
			</div>
		</div>
	)
}

export default Article
