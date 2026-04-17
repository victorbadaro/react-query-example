import { Outlet, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { UsersList } from '@/components/users-list';

export function Users() {
	const navigate = useNavigate();

	return (
		<div className="container mx-auto min-h-screen">
			<Button type="button" onClick={() => navigate('create')}>
				New user
			</Button>
			<UsersList />

			<Outlet />
		</div>
	);
}
