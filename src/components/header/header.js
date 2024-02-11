import LogoutIcon from '@mui/icons-material/Logout'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setAuth } from '../../redux/slicers/isAuth'
import {
	setIsAddItemModal,
	setIsLogModal,
} from '../../redux/slicers/showModals'
import styles from './header.module.css'
function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const token = localStorage.getItem('token')
	const userID = localStorage.getItem('userID')

	useEffect(() => {
		if (token) {
			dispatch(setAuth(true))
		}
	}, [token, dispatch])

	const auth = useSelector(state => state.authentification.authStatus)
	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				{auth ? (
					<div
						style={{ display: 'flex', alignItems: 'center', color: 'white' }}
					>
						<button
							onClick={() => {
								dispatch(setIsAddItemModal(true))
							}}
							className={`${styles.header__btn_putAd} ${styles.btn_hov01}`}
						>
							Разместить объявление
						</button>

						<button
							onClick={() => {
								navigate(`/myProfile/${userID}`)
							}}
							className={`${styles.header__btn_lk} ${styles.btn_hov01}`}
						>
							Личный кабинет
						</button>

						<LogoutIcon
							style={{ marginLeft: '10px', cursor: 'pointer' }}
							onClick={() => {
								localStorage.removeItem('token')
								localStorage.removeItem('userID')
								dispatch(setAuth(false))
								navigate('/')
							}}
						/>
					</div>
				) : (
					<button
						onClick={() => {
							dispatch(setIsLogModal(true))
						}}
						className={`${styles.header__btn_main_enter} ${styles.btn_hov01}`}
					>
						Вход в личный кабинет
					</button>
				)}
			</nav>
		</header>
	)
}

export default Header
