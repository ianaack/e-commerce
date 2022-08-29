import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewCategories = () => {
	const [categories, setCategory] = useState([]);

	useEffect(() => {
		getCategories();
	}, []);

	const getCategories = async () => {
		const response = await axios.get("/api/categories");
		setCategory(response.data);
	};

	const deleteCategory = async (id) => {
		await axios.delete(`/api/categories/${id}`);
		getCategories();
	};

	return (
		<div className="container my-2">
      <Link to="/add/category" className="btn btn-outline-dark mx-3">
				Add New Category
			</Link>
			<table className="table table-striped">
				<thead className="thead-dark">
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Category Name</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((category, index) => (
						<tr key={category.id}>
							<th scope="row">{category.id}</th>
							<td>{category.category_name}</td>
							<td>
								<Link
									to={`/edit/category/${category.id}`}
									className="btn btn-outline-warning mx-2"
								>
									Edit
								</Link>
								<button
									onClick={() => deleteCategory(category.id)}
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

export default ViewCategories;
