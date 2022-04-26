import {
  FETCH_CONTACTS,
  VIEW_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT,
  DELETE_CONTACT,
  RESET_CONTACT,
  SET_LOADER,
} from "../constant/types";

const initialState = {
  contacts: [],
  contact: null,
  showLoader: false,
};

const ContactReducer = (state = initialState, action) => {
  const { type, id, contacts, contact, dislayLoader } = action;
  console.log("========display", dislayLoader);

  switch (type) {
    case FETCH_CONTACTS:
      return {
        ...state,
        contacts: contacts,
      };
    case VIEW_CONTACT:
      return {
        ...state,
        contact: state.contacts.find((item) => item.id == id),
      };
    case ADD_CONTACT:
      contact[id] = state.contacts.length;
      return {
        ...state,
        contacts: [...state.contacts, contact],
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item.id === contact.id ? contact : item
        ),
      };
    case RESET_CONTACT:
      return {
        ...state,
        contacts: null,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id != id),
      };
    case SET_LOADER:
      return {
        ...state,
        showLoader: dislayLoader,
      };
    default:
      return state;
  }
};

export default ContactReducer;
