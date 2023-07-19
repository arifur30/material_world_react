import React from "react";
import { Link } from "react-router-dom";
import "./css/index.css";

function MainNavigation() {
	return (
		<nav id="main-navigation" className="nav nav-pills flex-column flex-sm-row">
			<div className="main-navigation-item">
				<p>Normal Link (Refresh): </p> <a href="/pageone"> Page One</a>
				React Router Link: <Link to="/pageone">Page One</Link>
			</div>
			<div className="main-navigation-item">
				<Link to="/">
					<h2>Main Page</h2>
				</Link>
			</div>
			<div className="main-navigation-item">
				<p>Normal Link (Refresh): </p> <a href="/pagetwo"> Page Two</a>
				React Router Link: <Link to="/pagetwo">Page Two</Link>
			</div>
		</nav>
	);
}

export default MainNavigation;
