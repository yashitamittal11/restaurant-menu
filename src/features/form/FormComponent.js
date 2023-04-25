import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setDeliveryAddress,
  setContactInformation,
  setPreferredDeliveryTime,
  toggleSaveAddress,
} from './formSlice';

const FormComponent = () => {
  const dispatch = useDispatch();

  const {
    deliveryAddress,
    contactInformation,
    preferredDeliveryTime,
    saveAddress,
  } = useSelector( state => state.form );

  const handleFormSubmit = ( e ) => {
    e.preventDefault();
    // Handle form submit
  };

  return (
	<>
		<h2 className = "form-heading">User Details Form</h2>
		<form className = "user-details" onSubmit = { handleFormSubmit } >
		<div className = "form-field">
			<label htmlFor = "delivery_addr">Delivery Address:</label>
			<input type = "text"
				placeholder="Delivery Address"
				value = { deliveryAddress }
				onChange = { ( e ) => dispatch( setDeliveryAddress( e.target.value ) ) }
			/>
		</div>

		<div className = "form-field">
			<label htmlFor = "contact_info">Contact Information:</label>
			<input type = "text" placeholder="Contact Information" value = { contactInformation } onChange = { ( e ) => dispatch( setContactInformation( e.target.value ) ) } />
		</div>

		<div className = "form-field">
			<label htmlFor = "delivery_time">Preferred Delivery Time:</label>
			<input type = "text" placeholder="Preferred Delivery Time" value = { preferredDeliveryTime } onChange = { ( e ) => dispatch( setPreferredDeliveryTime( e.target.value ) ) } />
		</div>

		<div className = "form-field">
			<label htmlFor = "save_addr">Save address for future orders:</label>
			<input type = "checkbox" checked = { saveAddress } onChange={ () => dispatch( toggleSaveAddress() ) } />
		</div>
		<button type = "submit">Submit</button>
		</form>
	</>
  );
};

export default FormComponent;
