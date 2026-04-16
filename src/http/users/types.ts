type User = {
	id: string;
	name: string;
	email: string;
};

type NewUser = Omit<User, 'id'>;

export type { NewUser, User };
