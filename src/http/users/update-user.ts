import { api } from '@/services/api';
import type { User, UserToBeUpdatedPayload } from './types';

export async function updateUser({ id, name, email }: UserToBeUpdatedPayload) {
	const { data } = await api.put<User>(`/users/${id}`, { name, email });

	return data;
}
