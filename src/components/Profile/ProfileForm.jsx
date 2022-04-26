import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContact, resetContact, updateContact } from "./../../actions/index";
import { getProfileDetails } from "./../../store/selectors/dataModel";
import "./ProfileForm.css";

const ProfileForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const contact = useSelector(getProfileDetails);
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    const user = { id: parseInt(params.id), ...data };
    dispatch(contact ? updateContact(user) : addContact(data));
    navigate("/");
  };

  const handleClose = () => {
    dispatch(resetContact());
    navigate("/contacts");
  };

  return (
    <>
      <div className="title">
        <Typography variant="h5" color="primary">
          {contact ? "Edit Contact" : "Add Contact"}
        </Typography>
      </div>
      <form className="root" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldGroup">
          <legend>Personal Details</legend>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="name"
                control={control}
                defaultValue={contact?.name}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Name"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Name required" }}
              />
            </div>
            <div className="field">
              <Controller
                name="userName"
                control={control}
                defaultValue={contact?.username}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="UserName"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "User name required" }}
              />
            </div>
          </div>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="email"
                control={control}
                defaultValue={contact?.email}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Email"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="email"
                  />
                )}
                rules={{ required: "Email required" }}
              />
            </div>
            <div className="field">
              <Controller
                name="phone"
                control={control}
                defaultValue={contact?.phone}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Phone"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Phone required" }}
              />
            </div>
          </div>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="website"
                control={control}
                defaultValue={contact?.website}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Website"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldGroup">
          <legend>Address</legend>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="address.street"
                control={control}
                defaultValue={contact?.address?.street}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Street"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Street required" }}
              />
            </div>
            <div className="field">
              <Controller
                name="address.suite"
                className="field"
                control={control}
                defaultValue={contact?.address?.suite}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Suite"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
          </div>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="address.city"
                control={control}
                defaultValue={contact?.address?.city}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="City"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "City required" }}
              />
            </div>
            <div className="field">
              <Controller
                name="address.zipcode"
                control={control}
                defaultValue={contact?.address?.zipcode}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Zipcode"
                    variant="filled"
                    value={value || contact?.address?.zipcode}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
          </div>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="address.geo.lat"
                control={control}
                defaultValue={contact?.address?.geo?.lat}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Latitude"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
            <div className="field">
              <Controller
                name="address.geo.lng"
                control={control}
                defaultValue={contact?.address?.geo?.lng}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Longitude"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="fieldGroup">
          <legend>Company Details</legend>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="company.name"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Company Name"
                    variant="filled"
                    value={value || contact?.company?.name}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
            <div className="field">
              <Controller
                name="company.catchPhrase"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Company Catch Phrase"
                    variant="filled"
                    value={value || contact?.company?.catchPhrase}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
          </div>
          <div className="fieldContainer">
            <div className="field">
              <Controller
                name="company.bs"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Company BS"
                    variant="filled"
                    value={value || contact?.company?.bs}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
          </div>
        </fieldset>
        <div className="buttonContainer">
          <div className="button">
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
          <div className="button">
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
