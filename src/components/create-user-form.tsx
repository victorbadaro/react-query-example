import { type SubmitEvent, useState } from 'react';
import { useCreateUser } from '@/hooks/users/use-create-user';
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Field, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';

export function CreateUserForm() {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const { mutate: createUser, isPending } = useCreateUser();

	function handleSubmitForm(event: SubmitEvent<HTMLFormElement>) {
		event.preventDefault();

		createUser(
			{ name, email },
			{
				onSuccess() {
					setIsDialogOpen(false);
					setName('');
					setEmail('');
				}
			}
		);
	}

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">New user</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-sm">
				<form onSubmit={handleSubmitForm}>
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
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button type="submit">{isPending ? 'Registering...' : 'Register'}</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
