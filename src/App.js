import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import MenuItem from './components/Menuitem/MenuItem';
import FormComponent from './features/form/FormComponent';
import store from "./app/store";
import { Provider } from 'react-redux';

const App = () => {
  return (
	<>
		<header className = "header">
			<nav className = "menu">
				<ul>
				<li><Link to = "/">Home</ Link></li>
				<li><Link to = "/menu">Restaurant menu</ Link></li>
				<li><Link to = "/form">User Details Form</ Link></li>
				</ul>
			</nav>
		</header>

		<Provider store = { store }>
			<Routes>
				<Route  path = "/" element = { <MenuItem />}/>
				<Route  path = "/menu" element = { <MenuItem />}/>
				<Route path = "/form" element = { <FormComponent /> } />
			</Routes>
		</Provider>

	</>
  )
}

export default App;
