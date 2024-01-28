import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setItemData } from '../redux/slicers/postsSlicer'
const useItemData = () => {
	const dispatch = useDispatch()

	const getItemWithId = itemId => {
		const API_URL = 'http://127.0.0.1:3000/getItem/'

		axios
			.get(`${API_URL}${itemId}`)
			.then(response => {
				console.log(response)
				dispatch(setItemData(response.data))
			})
			.catch(error => {
				console.log(error)
			})
	}

	return { getItemWithId }
}

export default useItemData
