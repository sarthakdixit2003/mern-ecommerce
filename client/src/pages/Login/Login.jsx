import './Login.css';

const Login = () => {
	return (
		<div className="login-box">
			<h2>Welcome Back</h2>
			<form action="#">
				<label htmlFor="email">Email address:</label>
				<input type="email" id="email" name="email" required />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password"	name="password" required />
				<button type="submit">Sign In</button>
			</form>
			<p>Forgot your password? <a href="#">Reset it here</a></p>
			<p>New to this website? <a href="#">Create an account</a></p>
		</div>
	);
};

export default Login;