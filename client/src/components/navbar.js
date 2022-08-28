import { Link } from "react-router-dom";
import React from "react";

function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link to={"/"} className="navbar-brand mx-4">
					E-Commerce
				</Link>
			</nav>
		</div>
	);
}

export default Nav;
