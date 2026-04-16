import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/http/users/delete-user';

export function useDeleteUser() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['users'] });
		}
	});
}
