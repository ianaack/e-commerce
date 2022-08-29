import { Link } from "react-router-dom";
import React from "react";

function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link to={"/"} className="navbar-brand mx-4">
					E-Commerce
				</Link>
				
				<Link to="/products" className="btn btn-outline-light mx-3">
					View Products
				</Link>
				<Link to="/categories" className="btn btn-outline-light mx-3">
					View Categories
				</Link>
			</nav>
		</div>
	);
}

export default Nav;
