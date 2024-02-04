import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
	const authStatus = useSelector(state => state.authentification.authStatus)
	if (!authStatus) {
		return <Navigate to='/' replace />
	}

	return children
}

export default ProtectedRoute
