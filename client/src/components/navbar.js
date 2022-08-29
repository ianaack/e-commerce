import { Link } from "react-router-dom";
import React from "react";
import Auth from "../utils/auth";

function Nav() {
	function showNavigation() {
		if (Auth.loggedIn()) {
			return (
				<>
					<Link to="/products" className="btn btn-outline-light mx-3">
						View Products
					</Link>
					<Link to="/categories" className="btn btn-outline-light mx-3">
						View Categories
					</Link>
					<Link
						to="/"
						className="btn btn-outline-light mx-3"
						alt={"Logout of your Account"}
						onClick={() => Auth.logout()}
					>
						Logout
					</Link>
				</>
			);
		} else {
			return (
				<>
					<Link to="/login" className="btn btn-outline-light mx-3">
						Login
					</Link>
					<Link to="/signup" className="btn btn-outline-light mx-3">
						Sign Up
					</Link>
				</>
			);
		}
	}
	return (
		<div className="">
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link to={"/"} className="navbar-brand mx-4">
					E-Commerce
				</Link>
				{showNavigation()}
			</nav>
		</div>
	);
}

export default Nav;
