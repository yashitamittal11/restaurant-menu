import React,  { useState } from 'react';
import Button from '../Button/Button';
import { useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import PropTypes from 'prop-types';
import { FaHamburger } from 'react-icons/fa';

function getBaseURL() {
    // detection is based on
   // const isDevServer = process.env.REACT_APP_WEBPACK_DEV_SERVER;
	const isDevServer = true;

    if ( isDevServer ) {
        return 'https://nisaya.local';
    }

    return ''; // for production build we will use a relative path
}

const MenuItem = () => {
	let [ dishes, setDishes ] = useState( null );

	useEffect( () => {
		// GET
		apiFetch( { path: getBaseURL() +  '/wp-json/nisaya/v1/menu' } )
		.then( ( items ) => {
			setDishes( items );
		} )
		.catch(( err ) => {
			console.error( err );
		} );
	  }, []);

  return (
	<>
	<div className=" menu__menu-item ">
		<div className=" sub-menu__icons ">
			<li><FaHamburger  size = '80' color='firebrick' /></li>
		</div>
	 { dishes?.length && dishes.map( ( dish ) => {
		return (
				<div className = " menu-item__container " key = { dish.id }>
					<figure className=" item__image ">
						<img src= { dish.img } alt= { dish.title } />
					</figure>
					<figcaption className =" menu__item-details ">
						<h3 className =" menu__item-label ">{ dish.title }</h3>
						<h5 className=" menu__item-price ">
							<span className = " menu__currency-symbol">{ dish.currencySymbol }</span>
							{ dish.price }
						</h5>

						<div className="menu__item-description ">
							<p> { dish.description }</p>
						</div>
						<Button />
					</figcaption>
				</div>
		);
	}
	) }
	</div>
	</>
  )
}

MenuItem.propTypes = {
	dishes: PropTypes.arrayOf( PropTypes.object )
}
export default MenuItem;
