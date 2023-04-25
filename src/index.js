import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

document.addEventListener( 'DOMContentLoaded', () => {
	const root = createRoot( document.getElementById( 'root' ) );
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	 );
} );

