/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateProducts() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [category, setCategory] = useState([""]);
	const { id } = useParams();

	const updateProduct = async (e) => {
		e.preventDefault();
		await axios.put(`http://localhost:3001/api/products/${id}`, {
			product_name: name,
			price: price,
			stock: stock,
			category: category,
		});
	};

	useEffect(() => {
		getProductById();
	}, []);

	const getProductById = async () => {
		const response = await axios.get(
			`http://localhost:3001/api/products/${id}`
		);
		setName(response.data.product_name);
		setPrice(response.data.price);
		setStock(response.data.stock);
		setCategory(response.data.category.category_name);
	};

	return (
		<div className="container">
			<form onSubmit={updateProduct}>
				<div className="form-group m-2">
					<label className="">Product Name</label>
					<input
						type={"text"}
						className="form-control"
						placeholder="Name"
						value={name}
						onClick={() => setName("")}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="form-group m-2">
					<label className="">Price</label>
					<input
						type={"number"}
						className="form-control"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="form-group m-2">
					<label className="">Stock</label>
					<input
						type={"number"}
						className="form-control"
						value={stock}
						onChange={(e) => setStock(e.target.value)}
					/>
				</div>
				<div className="form-group m-2">
					<label className="">Category</label>
					<select
						className="form-select"
						onChange={(e) => setCategory(e.target.value)}
					>
						<option defaultValue={""}>Open this select menu</option>
						{/* TODO: Map over options here */}
					</select>
				</div>

				<button className="btn btn-outline-success m-2">Update Product</button>
			</form>
		</div>
	);
}

export default UpdateProducts;
