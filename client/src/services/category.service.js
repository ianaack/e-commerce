import http from "../http-common";

class CategoryDataService {
	getAll() {
		return http.get("/categories");
	}
	get(id) {
		return http.get(`/categories/${id}`);
	}
	create(data) {
		return http.post("/categories", data);
	}
	update(id, data) {
		return http.put(`/categories/${id}`, data);
	}
	delete(id) {
		return http.delete(`/categories/${id}`);
	}
	deleteAll() {
		return http.delete(`/categories`);
	}
	findByName(category_name) {
		return http.get(`/categories?name=${category_name}`);
	}
}

export default new CategoryDataService();
