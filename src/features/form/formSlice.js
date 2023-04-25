import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice( {
  name: 'form',
  initialState: {
    deliveryAddress: '',
    contactInformation: '',
    preferredDeliveryTime: '',
    saveAddress: false,
  },
  reducers: {
    setDeliveryAddress: ( state, action ) => {
      state.deliveryAddress = action.payload;
    },
    setContactInformation: ( state, action ) => {
      state.contactInformation = action.payload;
    },
    setPreferredDeliveryTime: ( state, action ) => {
      state.preferredDeliveryTime = action.payload;
    },
    toggleSaveAddress: ( state ) => {
      state.saveAddress = !state.saveAddress;
    },
  },
});

export const { setDeliveryAddress, setContactInformation, setPreferredDeliveryTime, toggleSaveAddress } = formSlice.actions;
export default formSlice.reducer;
