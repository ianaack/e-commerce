import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewProducts = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const response = await axios.get("http://localhost:3001/api/products");
		setProduct(response.data);
	};

	const deleteProduct = async (id) => {
		await axios.delete(`http://localhost:3001/api/products/${id}`);
		getProducts();
	};

	return (
		<div>
			<Link to="/add" className="btn btn-outline-dark my-3">
				Add New Product
			</Link>
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
					{products.map((product, index) => (
						<tr key={product.id}>
							<th scope="row">{product.id}</th>
							<td>{product.product_name}</td>
							<td>{product.price}</td>
							<td>{product.stock}</td>
							<td>{product.category_id}</td>
							<td>
								<Link
									to={`/edit/${product.id}`}
									className="btn btn-outline-warning mx-2"
								>
									Edit
								</Link>
								<button
									onClick={() => deleteProduct(product.id)}
									className="btn btn-outline-danger"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ViewProducts;
