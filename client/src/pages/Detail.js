import React from "react";

// import components
import UpdateProduct from "../components/UpdateProduct";
import RemoveProduct from "../components/removeProduct";

const Detail = () => {
	return (
		<div className="container">
			<UpdateProduct />
			<RemoveProduct />
		</div>
	);
};

export default Detail;
