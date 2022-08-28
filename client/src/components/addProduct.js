import { useState } from "react";
import axios from "axios";

function AddProducts() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [category, setCategory] = useState([""]);

	const saveProduct = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:3001/api/products", {
			product_name: name,
			price: price,
			stock: stock,
			category_id: category,
		});
	};

	return (
		<div className="container">
			<form onSubmit={saveProduct}>
				<div className="form-group m-2">
					<label className="">Product Name</label>
					<input
						type={"text"}
						className="form-control"
						placeholder="Name"
						value={name}
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

				<button className="btn btn-outline-success m-2">Add Product</button>
			</form>
		</div>
	);
}

export default AddProducts;
