import { Navigate, useParams } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
	const authId = localStorage.getItem('userID')
	const { ID } = useParams()

	if (authId !== ID) {
		return <Navigate to={`/sellerProfile/${ID}`} replace />
	}
	if (authId == ID) {
		{
			return children
		}
	}
}

export default ProtectedRoute
