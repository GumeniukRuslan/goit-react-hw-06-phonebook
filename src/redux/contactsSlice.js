import { createSlice } from '@reduxjs/toolkit';

const contsctsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contsctsInitialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const indx = state.findIndex(contact => contact.id === action.payload.id);
      state.splice(indx, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
