const router = require("express").Router();
const { Product, Category } = require("../../models");

// The `/api/products` endpoint

// find all products
router.get("/", (req, res) => {
	Product.findAll({
		attributes: ["id", "product_name", "price", "stock", "category_id"],
		include: [
			{
				model: Category,
				attributes: ["id", "category_name"],
			},
		],
	})
		.then((dbProductData) => res.json(dbProductData))
		.catch((error) => {
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
});

// find a single product by its `id`
router.get("/:id", (req, res) => {
	Product.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Category,
				attributes: ["category_name"],
			},
		],
	})
		.then((dbProductData) => {
			if (!dbProductData) {
				res.status(404).json({ message: "No Product found with this id." });
				return;
			}
			res.json(dbProductData);
		})
		.catch((error) => {
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
});

// create new product
router.post("/", (req, res) => {
	/* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      category: "Shirts"
    }
  */
	Product.create(req.body, { Product })
		.then((product) => {
			res.status(200).json(product);
		})
		.catch((error) => {
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
});

// update product
router.put("/:id", (req, res) => {
	// update product data
	Product.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((product) => {
			res.status(200).json(product);
			window.location.replace("/");
		})
		.catch((error) => {
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
});

// delete one product by its `id` value
router.delete("/:id", (req, res) => {
	Product.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbProductData) => {
			if (!dbProductData) {
				res.status(404).json({ message: "No Product found with this id" });
				return;
			}
			res.json(dbProductData, { message: "Product Deleted" });
		})
		.catch((error) => {
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
});

module.exports = router;
