import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/" className="">E-Commerce</Link>
			<Link to="/products">Products</Link>
		</nav>
	);
}

export default Nav;
