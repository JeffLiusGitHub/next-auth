import { useRouter } from 'next/router';
import AuthForm from '../components/auth/auth-form';
import { useEffect, useState, useCallback } from 'react';
import { getSession } from 'next-auth/client';
function AuthPage() {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	const changeRoute = useCallback(async () => {
		const session = await getSession();
		if (session) {
			router.replace('/');
		} else setIsLoading(false);
	}, [router]);

	useEffect(() => {
		changeRoute();
	}, [changeRoute]);
	if (isLoading) {
		return <p>Loading...</p>;
	}
	return <AuthForm />;
}

export default AuthPage;
