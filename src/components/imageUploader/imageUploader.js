import { useEffect, useRef, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import loadImage from '../../assets/post-it.gif'
import { imgBB_Key } from '../../consts/consts'
import { imgbbImageUploader, updateUserInfo } from '../../query/api'
import { removeImage, setImages } from '../../redux/slicers/imgSlicer'
import styles from './imageUploader.module.css'

export const ImageUploader = props => {
	const dispatch = useDispatch()
	const [imageData, setImageData] = useState(
		props.imageState ? props.imageState.photo : ''
	)
	useEffect(() => {
		dispatch(
			setImages({
				data: props.imageState ? props.imageState.photo : null,
				isClear: false,
			})
		)
	}, [])
	const [deleteOrUpload, setDeleteOrUpload] = useState(props.imageState)

	const userId = localStorage.getItem('userID')
	const avatar = useSelector(state => state.image.avatar)

	const { mutate } = useMutation(['updateUser', userId, avatar], () => {
		updateUserInfo(avatar, userId)
	})
	const itemPhotoID =
		props.imageState && props.imageState._id ? props.imageState._id : ''

	const updateUserAvatar = () => {
		mutate(avatar, userId)
	}

	const [image, setImage] = useState(null)
	const imageRef = useRef(null)

	const imageUploadSelect = () => {
		imageRef.current.click()
	}

	const loadToImgBBImage = useMutation(['uploadImage'], imgbbImageUploader, {
		onSuccess: response => {
			console.log(response)
			setImageData(response.data.data.url)
			dispatch(setImages({ data: response.data.data.url }))
		},
	})

	const handleImageUpload = event => {
		const selectedImage = event.target.files[0]
		const reader = new FileReader()
		if (selectedImage) {
			reader.readAsDataURL(selectedImage)
		}
		reader.onloadend = e => {
			setImage(reader.result)
			const body = new FormData()
			body.append('key', imgBB_Key)
			body.append('image', reader.result.split(',').pop())
			loadToImgBBImage.mutate(body)
		}
	}

	return (
		<div>
			{deleteOrUpload ? (
				<div className={styles.form_newArt__img}>
					<img
						src={deleteOrUpload.photo}
						style={{ height: '100%', width: '100%' }}
						alt='images'
					/>
					<IoClose
						onClick={e => {
							setDeleteOrUpload(undefined)
							dispatch(removeImage(imageData))
							console.log(imageData)
						}}
						className={styles.svgIcons}
						style={{
							position: 'absolute',
							top: '0px',
							width: '25px',
							height: '25px',
							zIndex: '3',
							cursor: 'pointer',
							fill: 'red',
							left: '65px',
						}}
					/>
				</div>
			) : (
				<div
					onClick={e => {
						imageUploadSelect()
					}}
					className={styles.form_newArt__img}
				>
					{image ? (
						<div style={{ height: '100%', width: '100%' }}>
							<img
								src={loadToImgBBImage.isLoading ? loadImage : image}
								style={{ height: '100%', width: '100%' }}
								alt='images'
							/>
							{loadToImgBBImage.isSuccess ? (
								<IoClose
									onClick={e => {
										e.stopPropagation()
										setDeleteOrUpload(undefined)
										setImage('')
										dispatch(removeImage(imageData))
										console.log(imageData)
									}}
									className={styles.svgIcons}
									style={{
										position: 'absolute',
										top: '0px',
										width: '25px',
										height: '25px',
										zIndex: '3',
										cursor: 'pointer',
										fill: 'red',
										left: '65px',
									}}
								/>
							) : (
								''
							)}
						</div>
					) : (
						''
					)}

					<input
						ref={imageRef}
						style={{ left: '10000px', position: 'relative' }}
						onChange={handleImageUpload}
						type='file'
					></input>

					<div className={styles.form_newArt__img_cover}></div>
				</div>
			)}
		</div>
	)
}
