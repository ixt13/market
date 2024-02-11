import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import modalIcon from '../../../../assets/logo_modal.png'
import { API_URL } from '../../../../consts/consts'
import { setIsRegModal } from '../../../../redux/slicers/showModals'
import styles from './reg.module.css'
function Reg() {
	const isRegModalValue = useSelector(state => state.modal.isRegModal)
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [rePassword, setRePasswors] = useState('')
	const [lastName, setLastName] = useState('')
	const [name, setName] = useState('')
	const [city, setCity] = useState('')

	const timeStamp = () => {
		return new Date().toLocaleDateString('en-GB')
	}

	const handleSendRegData = () => {
		axios
			.post(`${API_URL}/create_user`, {
				email: email,
				password: password,
				lastName: lastName,
				name: name,
				city: city,
				createdAt: timeStamp(),
			})
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	if (!isRegModalValue) {
		return <div></div>
	}
	return (
		<div
			onClick={e => {
				if (e.target === e.currentTarget) {
					dispatch(setIsRegModal(false))
				}
			}}
			className={styles.wrapper}
		>
			<div>
				<div className={styles.modal__block}>
					<form
						onSubmit={e => {
							e.preventDefault()
							handleSendRegData()
						}}
						className={styles.modal__form_login}
						id='formLogUp'
						action='#'
					>
						<div className={styles.modal__logo}>
							<img src={modalIcon} alt='logo' />
						</div>
						<input
							onInput={e => {
								setEmail(e.target.value)
							}}
							className={styles.modal__input}
							type='text'
							name='login'
							id='loginReg'
							placeholder='email'
						/>
						<input
							onInput={e => {
								setPassword(e.target.value)
							}}
							className={styles.modal__input}
							type='password'
							name='password'
							id='passwordFirst'
							placeholder='Пароль'
						/>
						<input
							onInput={e => {
								setRePasswors(e.target.value)
							}}
							className={styles.modal__input}
							type='password'
							name='password'
							id='passwordSecond'
							placeholder='Повторите пароль'
						/>
						<input
							onInput={e => {
								setLastName(e.target.value)
							}}
							className={styles.modal__input}
							type='text'
							name='first-name'
							id='first-name'
							placeholder='Имя (необязательно)'
						/>
						<input
							onInput={e => {
								setName(e.target.value)
							}}
							className={styles.modal__input}
							type='text'
							name='first-last'
							id='first-last'
							placeholder='Фамилия (необязательно)'
						/>
						<input
							onInput={e => {
								setCity(e.target.value)
							}}
							className={styles.modal__input}
							type='text'
							name='city'
							id='city'
							placeholder='Город (необязательно)'
						/>
						<button className={styles.modal__btn_signup_ent} id='SignUpEnter'>
							<div>Зарегистрироваться</div>{' '}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
export default Reg
