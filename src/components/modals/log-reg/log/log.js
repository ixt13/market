import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import modalIcon from '../../../../assets/logo_modal.png'
import { API_URL } from '../../../../consts/consts'
import { setAuth } from '../../../../redux/slicers/isAuth'
import {
	setIsLogModal,
	setIsRegModal,
} from '../../../../redux/slicers/showModals'
import styles from './log.module.css'
function Log() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLogModalValue = useSelector(state => state.modal.isLogModal)

	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const handleSendLoginRequest = () => {
		axios
			.post(`${API_URL}/authUser`, {
				email: emailValue,
				password: passwordValue,
			})
			.then(response => {
				localStorage.setItem('token', response.data.tokenValue)
				localStorage.setItem('userEmail', response.data.email)
				console.log(response.data.ID)
				localStorage.setItem('userID', response.data.ID)
				dispatch(setAuth(true))
				navigate('/myProfile')
			})
			.catch(error => {
				console.log(error.response.data)
			})
	}

	if (!isLogModalValue) {
		return <div></div>
	}

	return (
		isLogModalValue && (
			<div
				onClick={e => {
					if (e.target === e.currentTarget) {
						dispatch(setIsLogModal(false))
					}
				}}
				className={styles.wrapper}
			>
				<div className={styles.container_enter}>
					<div className={styles.modal__block}>
						<form
							onSubmit={e => {
								e.preventDefault()
							}}
							className={styles.modal__form_login}
							id='formLogIn'
							action='#'
						>
							<div className={styles.modal__logo}>
								<img src={modalIcon} alt='logo' />
							</div>
							<input
								onInput={e => {
									setEmailValue(e.target.value)
								}}
								className={`${styles.modal__input} ${styles.login}`}
								type='text'
								name='login'
								id='formlogin'
								placeholder='email'
							/>
							<input
								onInput={e => {
									setPasswordValue(e.target.value)
								}}
								className={`${styles.modal__input} ${styles.password}`}
								type='password'
								name='password'
								id='formpassword'
								placeholder='Пароль'
							/>
							<button
								onClick={() => {
									handleSendLoginRequest()
									console.log('login')
								}}
								className={styles.modal__btn_enter}
								id='btnEnter'
							>
								<div>Войти</div>
							</button>
							<button
								onClick={() => {
									dispatch(setIsLogModal(false))
									dispatch(setIsRegModal(true))
								}}
								className={styles.modal__btn_signup}
								type='button'
							>
								<div>Зарегистрироваться</div>
							</button>
						</form>
					</div>
				</div>
			</div>
		)
	)
}
export default Log
