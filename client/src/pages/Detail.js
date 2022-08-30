/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
	const [currentProduct, setCurrentProduct] = useState({});
	const { id } = useParams();

	useEffect(() => {
		getProductByID();
	}, []);

	const getProductByID = async () => {
		const response = await axios.get(`/api/products/${id}`);
		setCurrentProduct(response.data);
	};

	const deleteProduct = async () => {
		await axios.delete(`/api/products/${id}`);
		window.location.replace("/products");
	};

	return (
		<div className="container">
			<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Product Name</th>
						<th scope="col">Price</th>
						<th scope="col">Stock</th>
						<th scope="col">Category</th>
					</tr>
				</thead>
				<tbody>
					<tr key={currentProduct.id}>
						<th scope="row">{currentProduct.id}</th>
						<td>{currentProduct.product_name}</td>
						<td>{currentProduct.price}</td>
						<td>{currentProduct.stock}</td>
						<td>{currentProduct.category_id}</td>
						<td>
							<Link
								to={`/edit/product/${currentProduct.id}`}
								className="btn btn-outline-warning mx-2"
							>
								Edit
							</Link>
							<button
								onClick={() => deleteProduct(currentProduct.id)}
								className="btn btn-outline-danger"
							>
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Detail;
