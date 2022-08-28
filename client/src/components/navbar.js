import { Link } from "react-router-dom";
import React from "react";

function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand navbar-dark bg-dark">
				<Link to={"/"} className="navbar-brand">
					E-Commerce
				</Link>
				<div className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link to={"/products"} className="nav-link">
							View Products
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"/categories"} className="nav-link">
							View Categories
						</Link>
					</li>
					<li className="nav-item">
						<Link to={"/tags"} className="nav-link">
							View Tags
						</Link>
					</li>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
