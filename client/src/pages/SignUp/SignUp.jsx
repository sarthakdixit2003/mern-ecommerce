import './SignUp.css';

const Signup = () => {
	return (
		<div className="signup-box">
			<h2>Create an Account</h2>
			<form action="#">
				<label htmlFor="name">Name:</label>
				<input type="text" id="name" name="name" required />
				<label htmlFor="email">Email address:</label>
				<input type="email" id="email" name="email" required />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" name="password" required />
				<button type="submit">Create Account</button>
			</form>
			<p>Or sign up with:</p>
			<div className="social-signup">
				<a href="#">
					<i className="fa-brands fa-google signUpIcons"></i>
					Sign up with Google
				</a>
				<a href="#">
					<i className="fa-brands fa-facebook-f signUpIcons"></i>
					Sign up with Facebook
				</a>
			</div>
		</div>
	);
};

export default Signup;