import { Route, Routes } from 'react-router';
import { UserDialog } from '@/components/user-dialog';
import { NotFound } from '@/pages/not-found';
import { Users } from '@/pages/users';

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Users />}>
				<Route path="create" element={<UserDialog />} />
				<Route path=":id" element={<UserDialog />} />
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
