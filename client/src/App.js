import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap";

// import pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// import components
// import AddProduct from "./components/addProduct";
// import UpdateProduct from "./components/updateProduct";
// import ViewProducts from "./components/viewProducts";
// import RemoveProduct from "./components/removeProduct";

function App() {
	<Router>
		<Routes>
			<nav className="navbar navbar-expand navbar-dark bg-secondary">
				<Link
					to={"/products"}
					className="navbar-brand"
					style={{ paddingLeft: "5%" }}
				>
					Products
				</Link>
			</nav>
			<Route path="/" element={<Home />} />
			<Route path="/products/:id" element={<Detail />} />
		</Routes>
	</Router>;
}

export default App;
