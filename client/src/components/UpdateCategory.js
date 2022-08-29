/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateCategories() {
	const [name, setName] = useState("");
	const { id } = useParams();

	const updateCategory = async (e) => {
		e.preventDefault();
		await axios.put(`/api/categories/${id}`, {
			category_name: name,
		});
	};

	useEffect(() => {
		getCategoryById();
	}, []);

	const getCategoryById = async () => {
		const response = await axios.get(`/api/categories/${id}`);
		setName(response.data.category_name);
	};

	return (
		<div className="container">
			<form onSubmit={updateCategory}>
				<div className="form-group m-2">
					<label className="">Category Name</label>
					<input
						type={"text"}
						className="form-control"
						placeholder="Category"
						value={name}
						onClick={() => setName("")}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button className="btn btn-outline-success m-2">Update Category</button>
			</form>
		</div>
	);
}

export default UpdateCategories;
