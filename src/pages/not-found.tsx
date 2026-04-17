import { House } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyTitle } from '@/components/ui/empty';

export function NotFound() {
	const navigate = useNavigate();

	return (
		<Empty>
			<EmptyHeader>
				<EmptyTitle>404 - Not Found</EmptyTitle>
				<EmptyDescription>The page you&apos;re looking for doesn&apos;t exist. Try searching for what you need below.</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button type="button" onClick={() => navigate('/', { replace: true })}>
					<House />
					Go back home
				</Button>
				<EmptyDescription>
					Need help? <span className="underline">Contact support</span>
				</EmptyDescription>
			</EmptyContent>
		</Empty>
	);
}
