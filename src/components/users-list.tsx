import { Trash2 } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { useDeleteUser } from '@/hooks/users/use-delete-user';
import { useUsers } from '@/hooks/users/use-users';
import { Button } from './ui/button';
import { Spinner } from './ui/spinner';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

export function UsersList() {
	const navigate = useNavigate();
	const { data, isLoading, error } = useUsers();
	const { mutate: deleteUser } = useDeleteUser();

	if (isLoading) {
		return (
			<>
				<Spinner />
				<p className="animate-pulse">Loading...</p>
			</>
		);
	}

	if (error) {
		return <p className="text-muted">{error.message}</p>;
	}

	function handleDeleteUserButton(event: MouseEvent<HTMLButtonElement>, id: string) {
		event.stopPropagation();

		deleteUser(id);
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>ID</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{data?.map((user) => (
					<TableRow key={user.id} className="cursor-pointer" onClick={() => navigate(user.id)}>
						<TableCell>{user.id}</TableCell>
						<TableCell>{user.name}</TableCell>
						<TableCell>{user.email}</TableCell>
						<TableCell>
							<Button type="button" onClick={(event) => handleDeleteUserButton(event, user.id)}>
								<Trash2 />
								Delete user
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
