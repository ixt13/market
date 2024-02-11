import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	refetchOnWindowFocus: false,
})

export { QueryClientProvider, queryClient }
