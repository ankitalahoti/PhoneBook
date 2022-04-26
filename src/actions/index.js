import {
  FETCH_CONTACTS,
  VIEW_CONTACT,
  DELETE_CONTACT,
  ADD_CONTACT,
  RESET_CONTACT,
  UPDATE_CONTACT,
  SET_LOADER,
} from "../constant/types";
import axios from "axios";

export const setContacts = (data) => ({
  type: FETCH_CONTACTS,
  contacts: data,
});

const viewContact = (id) => ({
  type: VIEW_CONTACT,
  id,
});

const addContact = (data) => ({
  type: ADD_CONTACT,
  contact: data,
});

const resetContact = () => ({
  type: RESET_CONTACT,
});

const updateContact = (data) => ({
  type: UPDATE_CONTACT,
  contact: data,
});

const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  id,
});

const setLoader = (value) => ({
  type: SET_LOADER,
  dislayLoader: value,
});

const fetchContacts = () => {
  return async (dispatch) => {
    dispatch(setLoader(true));
    try {
      let users = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch(setContacts(users.data));
      dispatch(setLoader(false));
    } catch (e) {
      console.log(e);
    }
  };
};

export {
  fetchContacts,
  viewContact,
  addContact,
  deleteContact,
  resetContact,
  updateContact,
};
