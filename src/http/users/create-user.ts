import { api } from '@/services/api';
import type { User, UserPayload } from './types';

export async function createUser({ name, email }: UserPayload) {
	const { data } = await api.post<User>('/users', { name, email });

	return data;
}
