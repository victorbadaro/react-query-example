import { useQueryClient } from '@tanstack/react-query';
import { type SubmitEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useCreateUser } from '@/hooks/users/use-create-user';
import { useUpdateUser } from '@/hooks/users/use-update-user';
import type { User } from '@/http/users/types';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Field, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';

export function UserDialog() {
	const { id } = useParams<'id'>();
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate: createUser } = useCreateUser();
	const { mutate: updateUser } = useUpdateUser();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	useEffect(() => {
		if (id) {
			const users = queryClient.getQueryData<User[]>(['users']);
			const user = users?.find((user) => user.id === id);

			if (user) {
				setName(user.name);
				setEmail(user.email);
			} else {
				navigate('/not-found', { replace: true });
			}
		}
	}, [id, queryClient.getQueryData, navigate]);

	function handleFormSubmit(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		if (id) {
			updateUser({ id, name, email });
		} else {
			createUser({ name, email });
		}

		navigate('/');
	}

	return (
		<Dialog open={true}>
			<DialogContent showCloseButton={false} className="sm:max-w-sm">
				<form onSubmit={handleFormSubmit}>
					<DialogHeader>
						<DialogTitle>Create user</DialogTitle>
						<DialogDescription>Create a brand new user here. You can do that righ now!</DialogDescription>
					</DialogHeader>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="name">Name</FieldLabel>
							<Input
								type="text"
								id="name"
								name="name"
								placeholder="Type your name here..."
								value={name}
								onChange={(event) => setName(event.target.value)}
								autoComplete="off"
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input
								type="email"
								id="email"
								name="email"
								placeholder="Type your email here..."
								value={email}
								onChange={(event) => setEmail(event.target.value)}
								autoComplete="off"
							/>
						</Field>
					</FieldGroup>
					<DialogFooter className="pt-4">
						<Button type="button" variant="outline" onClick={() => navigate('/')}>
							Cancel
						</Button>
						<Button type="submit">Save</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
