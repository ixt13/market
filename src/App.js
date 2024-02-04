import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Article from './screens/acticlePage/article'
import Main from './screens/mainPage/main'
import ProfilePage from './screens/profilePage/profilePage'
import SellerPage from './screens/sellerPage/seller'

import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import ProtectedRoute from './protectedRoute'
import { queryClient } from './query/queryclient'
import { store } from './redux/store/store'
function App() {
	return (
		<div style={{ minHeight: '100%', position: 'relative', zIndex: '1' }}>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Main />} />
							<Route path='/article' element={<Article />} />
							<Route
								path='/myProfile'
								element={
									<ProtectedRoute>
										<ProfilePage />
									</ProtectedRoute>
								}
							/>
							<Route path='/sellerProfile' element={<SellerPage />} />
						</Routes>
					</BrowserRouter>
				</QueryClientProvider>
			</Provider>
		</div>
	)
}

export default App
