import { useState } from "react";
import axios from "axios";

function AddCategory() {
	const [name, setName] = useState("");

	const saveCategory = async (e) => {
		e.preventDefault();

		await axios.post("/api/categories", {
			category_name: name,
		});
	};

	return (
		<div className="container">
			<form onSubmit={saveCategory}>
				<div className="form-group m-2">
					<label className="">Category Name</label>
					<input
						type={"text"}
						className="form-control"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button className="btn btn-outline-success m-2">Add Category</button>
			</form>
		</div>
	);
}

export default AddCategory;
