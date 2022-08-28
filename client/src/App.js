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
import AddProducts from "./components/AddProduct";
import UpdateProducts from "./components/UpdateProduct";

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/products/:id" element={<Detail />} />
				<Route path="/add" element={<AddProducts />} />
				<Route path="/edit/:id" element={<UpdateProducts />} />
				<Route element={<NoMatch />} />
			</Routes>
		</Router>
	);
}

export default App;
