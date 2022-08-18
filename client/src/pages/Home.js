import React from "react";

// import components
import ViewProducts from "../components/viewProducts";
import AddProduct from "../components/addProduct";

const Home = () => {
	return (
		<div className="container">
			<ViewProducts />
			<AddProduct />
		</div>
	);
};

export default Home;
