/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateProducts() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [category, setCategory] = useState(0);
	const [categories, setCategories] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		getProductById();
	}, []);

	const getProductById = async () => {
		const response = await axios.get(`/api/products/${id}`);
		setName(response.data.product_name);
		setPrice(response.data.price);
		setStock(response.data.stock);
		setCategory(response.data.category.category_name);
	};

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		const response = await axios.get("/api/categories");
		setCategories(response.data);
	};

	const updateProduct = async (e) => {
		e.preventDefault();
		await axios
			.put(`/api/products/${id}`, {
				product_name: name,
				price: price,
				stock: stock,
				category_id: category,
			})
			.then(window.location.replace("/products"))
			.catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log("Error", error.message);
				}
				console.log(error.config);
			});
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
						value={category}
					>
						<option defaultValue={""}>Select an Option</option>
						{/* TODO: Map over options here */}
						{categories.map((category, i) => (
							<option key={i} value={category.id}>
								{category.category_name}
							</option>
						))}
					</select>
				</div>

				<button className="btn btn-outline-success m-2">Update Product</button>
			</form>
		</div>
	);
}

export default UpdateProducts;
