import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import axios from "axios";

function Signup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const saveUser = async (e) => {
		e.preventDefault();
		await axios.post("/api/users", {
			email: email,
			password: password,
		});
		Auth.login();
	};

	return (
		<div className="container">
			<Link to="/login">← Already have an account? Log In instead</Link>
			<form onSubmit={saveUser}>
				<div className="form-group m-2">
					<label className="">Email</label>
					<input
						required
						type={"text"}
						className="form-control"
						placeholder="email@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="form-group m-2">
					<label className="">Password</label>
					<input
						required
						type={"text"}
						className="form-control"
						placeholder="**********"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="btn btn-outline-success m-2">Sign Up</button>
			</form>
		</div>
	);
}

export default Signup;
