import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CreateUserForm } from './components/create-user-form';
import { UsersList } from './components/users-list';

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="container mx-auto min-h-screen">
				<CreateUserForm />
				<UsersList />
			</div>
		</QueryClientProvider>
	);
}
