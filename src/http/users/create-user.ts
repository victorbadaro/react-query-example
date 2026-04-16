import { api } from '@/services/api';
import type { NewUser, User } from './types';

export async function createUser({ name, email }: NewUser) {
	const { data } = await api.post<User>('/users', { name, email });

	return data;
}
