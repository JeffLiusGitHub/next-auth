import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { useSession, getSession } from 'next-auth/client';
import { useState, useEffect } from 'react';
function UserProfile() {
	// Redirect away if NOT auth
	const [isLoading, setIsLoading] = useState(true);
	const [loadedSession, setLoadedSession] = useState();
	useEffect(() => {
		getSession().then((session) => {
			setIsLoading(false);
			if (!session) {
				window.location.href = '/auth';
			} else {
				setIsLoading(false);
			}
			setLoadedSession(session);
		});
	}, []);
	// const [session, loading] = useSession();

	const changePasswordHandler = async (passwordData) => {
		const response = await fetch('/api/user/change-password', {
			method: 'PATCH',
			body: JSON.stringify(passwordData),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		console.log(response);
		const data = await response.json();
		console.log({ data });
	};
	if (isLoading) {
		return <p className={classes.profile}>loading...</p>;
	}

	return (
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm onChangePassword={changePasswordHandler} />
		</section>
	);
}

export default UserProfile;
