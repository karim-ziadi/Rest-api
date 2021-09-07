import axios from "axios";
import {
	GET_ALL_CONTACTS,
	GET_CONTACT,
	TOGGLE_FALSE,
	TOGGLE_TRUE,
} from "../constants/ActionsTypes";

export const getContacts = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/contacts");
		dispatch({ type: GET_ALL_CONTACTS, payload: res.data.contacts });
	} catch (error) {
		console.log(error);
	}
};

export const addContact = (newContact) => async (dispatch) => {
	try {
		await axios.post("/api/contacts", newContact);
		dispatch(getContacts());
	} catch (error) {
		console.log(error);
	}
};

export const deleteContact = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/contacts/${id}`);
		dispatch(getContacts());
	} catch (error) {
		console.log(error);
	}
};

export const editContact = (id, newtDataContac) => async (dispatch) => {
	try {
		await axios.put(`/api/contacts/${id}`, newtDataContac);
		dispatch(getContacts());
	} catch (error) {
		console.log(error);
	}
};

export const toggleTrue = () => {
	return {
		type: TOGGLE_TRUE,
	};
};

export const toggleFalse = () => {
	return {
		type: TOGGLE_FALSE,
	};
};

export const getContact = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/contacts/${id}`);
		console.log(res)
		dispatch({ type: GET_CONTACT, payload: res.data.contact });
	} catch (error) {
		console.log(error);
	}
};
