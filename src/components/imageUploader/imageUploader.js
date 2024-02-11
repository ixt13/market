import axios from 'axios'
import { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from '../../query/api'
import { setAvatar, setImages } from '../../redux/slicers/imgSlicer'
import styles from './imageUploader.module.css'
export const ImageUploader = props => {
	const userId = localStorage.getItem('userID')
	const avatar = useSelector(state => state.image.avatar)

	const { mutate } = useMutation(['updateUser', userId, avatar], () => {
		updateUserInfo(avatar, userId)
	})

	const updateUserAvatar = () => {
		mutate(avatar, userId)
	}

	const dispatch = useDispatch()
	const [image, setImage] = useState(null)
	const imageRef = useRef(null)

	const imageUploadSelect = () => {
		imageRef.current.click()
	}

	const handleImageUpload = event => {
		const selectedImage = event.target.files[0]
		const reader = new FileReader()
		if (selectedImage) {
			reader.readAsDataURL(selectedImage)
		}
		reader.onloadend = e => {
			const body = new FormData()
			body.append('key', 'f5dc5ca8f0062a3732b93271f8b9dec5')
			body.append('image', reader.result.split(',').pop()) //To delete 'data:image/png;base64,' otherwise imgbb won't process it.
			axios
				.post('https://api.imgbb.com/1/upload', body)
				.then(response => {
					setImage(reader.result)
					console.log(response.data.data.id)
					dispatch(setImages({ data: response.data.data.url }))

					if (props.uploadeWithoutBox) {
						dispatch(setAvatar(response.data.data.url))
					}
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

	return (
		<div>
			{props.uploadeWithoutBox ? (
				<div
					onClick={() => imageUploadSelect()}
					style={{ textAlign: 'center' }}
				>
					Заменить
					<input
						ref={imageRef}
						style={{ left: '10000px', position: 'relative' }}
						onChange={handleImageUpload}
						type='file'
					></input>
				</div>
			) : (
				<div
					onClick={e => {
						imageUploadSelect()
					}}
					className={styles.form_newArt__img}
				>
					{image ? (
						<img
							src={image}
							style={{ height: '100%', width: '100%' }}
							alt='images'
						/>
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
