import classes from './profile-form.module.css';
import { useRef } from 'react';
function ProfileForm(props) {
	const newPasswordRef = useRef();
	const oldPasswordRef = useRef();
	const submitHanlder = (event) => {
		event.preventDefault();
		const oldPassword = oldPasswordRef.current.value;
		const newPassword = newPasswordRef.current.value;
		//validation
		props.onChangePassword({ oldPassword, newPassword });
	};
	return (
		<form className={classes.form} onSubmit={submitHanlder}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input type="password" id="new-password" ref={newPasswordRef} />
			</div>
			<div className={classes.control}>
				<label htmlFor="old-password">Old Password</label>
				<input type="password" id="old-password" ref={oldPasswordRef} />
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
}

export default ProfileForm;
