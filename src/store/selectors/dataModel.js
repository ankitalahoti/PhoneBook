import get from "lodash/get";

export const getContacts = (state) => get(state, "dataModel.contacts", []);

export const getProfileDetails = (state) =>
  get(state, "dataModel.contact", null);

export const getLoader = (state) => get(state, "dataModel.showLoader", false);
