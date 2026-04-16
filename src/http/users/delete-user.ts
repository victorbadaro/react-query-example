import { api } from '@/services/api';

export async function deleteUser(id: string) {
	await api.delete(`/users/${id}`);
}
