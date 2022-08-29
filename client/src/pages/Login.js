import { useState } from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import axios from "axios";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginUser = async (e) => {
		e.preventDefault();
		await axios.post("/api/users/login", {
			email: email,
			password: password,
		});
		Auth.login();
	};

	return (
		<div className="container">
			<Link to="/signup">← Don't have an account? Sign Up instead</Link>
			<form onSubmit={loginUser}>
				<div className="form-group m-2">
					<label className="">Email</label>
					<input
						required
						type={"email"}
						className="form-control"
						placeholder="email@example.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group m-2">
					<label className="">Password</label>
					<input
						required
						type={"password"}
						className="form-control"
						placeholder="**********"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="btn btn-outline-success m-2">Login</button>
			</form>
		</div>
	);
}

export default Login;
