type User = {
	id: string;
	name: string;
	email: string;
};

type UserPayload = Omit<User, 'id'>;

type UserToBeUpdatedPayload = Pick<User, 'id'> & Partial<UserPayload>;

export type { User, UserPayload, UserToBeUpdatedPayload };
