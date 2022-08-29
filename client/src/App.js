import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// import components
import Nav from "./components/Navbar";
import ViewProducts from "./components/ProductList";
import AddProducts from "./components/AddProduct";
import UpdateProducts from "./components/UpdateProduct";
import ViewCategories from "./components/CategoryList";
import AddCategory from "./components/AddCategory";
import UpdateCategories from "./components/UpdateCategory";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/products" element={<ViewProducts />} />
				<Route path="/products/:id" element={<Detail />} />
				<Route path="/add/product" element={<AddProducts />} />
				<Route path="/edit/product/:id" element={<UpdateProducts />} />
				<Route path="/categories" element={<ViewCategories />} />
				<Route path="/add/category" element={<AddCategory />} />
				<Route path="/edit/category/:id" element={<UpdateCategories />} />
				<Route element={<NoMatch />} />
			</Routes>
		</Router>
	);
}

export default App;
