import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDataById, setUserReview } from '../../../query/api'
import { setIsReviewsModal } from '../../../redux/slicers/showModals'
import styles from './reviews.module.css'
import { UserReview } from './userReview/userReview'

function Reviews(props) {
	const userID = localStorage.getItem('userID')
	const isReviews = useSelector(state => state.modal.isReviewsModal)
	const dispatch = useDispatch()

	const [reviewTextContent, setReviewTextContent] = useState('')

	const selectedUserId = props.ID

	const { data, isLoading, error } = useQuery(['userDataInfo', userID], () =>
		getUserDataById(userID)
	)

	const reviewMutate = useMutation(
		['setReview'],
		() => {
			if (data) {
				setUserReview(
					selectedUserId,
					data.avatar,
					data.email,
					data.name,
					reviewTextContent
				)
			}
		},
		{
			onMutate: data => {
				console.log(data)
			},
		}
	)

	const ssd = () => {
		if (data) {
			reviewMutate.mutate({
				selectedUserId,
				userImg: data.avatar,
				userEmail: data.email,
				userName: data.name,
				reviewTextContent,
			})
		}
	}

	if (!isReviews) {
		return <div></div>
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.container_bg}>
				<div className={styles.modal__block}>
					<div className={styles.modal__content}>
						<h3 className={styles.modal__title}>Отзывы о товаре</h3>
						<div className={styles.modal__btn_close}>
							<div
								onClick={() => {
									dispatch(setIsReviewsModal(false))
								}}
								className={styles.modal__btn_close_line}
							></div>
						</div>
						<div className={styles.modal__scroll}>
							<form
								onSubmit={e => {
									e.preventDefault()
									ssd()
								}}
								className={styles.modal__form_newArt}
								id='formNewArt'
								action='#'
							>
								<div className={styles.form_newArt__block}>
									<div className={styles.formArea_label}>Добавить отзыв</div>
									<textarea
										onChange={e => {
											setReviewTextContent(e.target.value)
										}}
										className={styles.form_newArt__area}
										name='text'
										id='text'
										cols='auto'
										rows='5'
										placeholder='Введите описание'
									></textarea>
								</div>
								<button
									className={`${styles.form_newArt__btn_pub} ${styles.btn_hov02}`}
									id='btnPublish'
								>
									Опубликовать
								</button>
							</form>
							<div className={styles.modal__reviews}>
								<div className={styles.reviews__review}>
									{props.data.map(item => (
										<UserReview
											key={item._id}
											review={item.review}
											timeStamp={item.timeStamp}
											userEmail={item.userEmail}
											userImg={item.userImg}
											userName={item.userName}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Reviews
