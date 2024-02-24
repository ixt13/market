import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { updateItemByID } from '../../../query/api'
import { setIsSettingsModal } from '../../../redux/slicers/showModals'
import { ImageUploader } from '../../imageUploader/imageUploader'
import styles from './objSettings.module.css'
function ObjSettigs(props) {
	const isModal = useSelector(state => state.modal.isItemSettingsModal)
	const dispatch = useDispatch()
	const [name, setName] = useState(props.data.name)
	const [description, setDescription] = useState(props.data.description)
	const [price, setPrice] = useState(props.data.price)
	const images = useSelector(state => state.image.images)

	const [itemID, setItemID] = useState(props.data._id)
	const userID = localStorage.getItem('userID')
	const queryClient = useQueryClient()

	const updateItem = useMutation(
		['updateItem'],
		() => {
			updateItemByID(name, description, price, images, itemID, userID)
		},
		{
			onMutate: data => {
				console.log(data)
				setItemID(data.itemID)
				queryClient.setQueryData(['item', itemID], data)
			},
		}
	)

	const update = () => {
		updateItem.mutate({ name, description, price, images, itemID, userID })
	}

	if (!isModal) {
		return <div></div>
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container_bg}>
				<div className={styles.modal__block}>
					<div className={styles.modal__content}>
						<h3 className={styles.modal__title}>Редактировать объявление</h3>
						<div className={styles.modal__btn_close}>
							<div
								onClick={() => {
									dispatch(setIsSettingsModal(false))
								}}
								className={styles.modal__btn_close_line}
							></div>
						</div>
						<div
							className={`${styles.modal__form_newArt}`}
							id='formNewArt'
							action='#'
						>
							<div className={styles.form_newArt__block}>
								<label className={styles.label}>Название</label>
								<input
									className={styles.form_newArt__input}
									type='text'
									name='name'
									id='formName'
									placeholder='Введите название'
									value={name ? name : ''}
									onChange={e => {
										setName(e.target.value)
									}}
								/>
							</div>
							<div className={styles.form_newArt__block}>
								<label>Описание</label>
								<textarea
									className={styles.form_newArt__area}
									name='text'
									id='formArea'
									cols='auto'
									rows='10'
									placeholder='Введите описание'
									value={description ? description : ''}
									onChange={e => {
										setDescription(e.target.value)
									}}
								></textarea>
							</div>
							<div className={styles.form_newArt__block}>
								<p className={styles.form_newArt__p}>
									Фотографии товара<span>не более 5 фотографий</span>
								</p>
								<div className={styles.form_newArt__bar_img}>
									<ImageUploader
										imageState={
											props.data && props.data.images
												? props.data.images[0]
												: ''
										}
									/>
									<ImageUploader
										imageState={
											props.data && props.data.images
												? props.data.images[1]
												: ''
										}
									/>
									<ImageUploader
										imageState={
											props.data && props.data.images
												? props.data.images[2]
												: ''
										}
									/>
									<ImageUploader
										imageState={
											props.data && props.data.images
												? props.data.images[3]
												: ''
										}
									/>
									<ImageUploader
										imageState={
											props.data && props.data.images
												? props.data.images[4]
												: ''
										}
									/>
								</div>
							</div>
							<div
								className={`${styles.form_newArt__block} ${styles.block_price}`}
							>
								<label>Цена</label>
								<input
									className={styles.form_newArt__input_price}
									type='text'
									name='price'
									id='formName'
									value={price ? price : ''}
									onChange={e => {
										setPrice(e.target.value)
									}}
								/>
								<div className={styles.form_newArt__input_price_cover}></div>
							</div>

							<button
								onClick={() => {
									update()
								}}
								className={`${styles.form_newArt__btn_pub} ${styles.btn_hov02}`}
								id='btnPublish'
							>
								Сохранить
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ObjSettigs
