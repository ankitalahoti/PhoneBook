import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { viewContact, deleteContact } from "./../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { getProfileDetails } from "./../../store/selectors/dataModel";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./Profile.css";

const Profile = () => {
  const [open, openModal] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const contact = useSelector(getProfileDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewContact(params.id));
  }, [params.id]);

  const handleDialogOpen = () => {
    openModal(true);
  };

  const handleDialogClose = () => {
    openModal(false);
  };

  const handleProfileDelete = () => {
    dispatch(deleteContact(params.id));
    navigate("/contacts");
  };

  const handleEditContact = () => {
    navigate(`/contact/${params.id}/edit`);
  };

  return (
    <>
      <div className="profileContainer">
        <div className="avatar">
          <Avatar
            className="item"
            sx={{
              width: 250,
              height: 250,
            }}
            variant="square"
          ></Avatar>
        </div>
        <div>
          <div className="item">
            <Typography color="primary">Personal Details</Typography>
            <Typography>Name : {contact?.name}</Typography>
            <Typography>UserName : {contact?.username}</Typography>
          </div>
          <div className="item">
            <Typography color="primary">Company Details</Typography>
            <Typography>Name : {contact?.company?.name}</Typography>
            <Typography>BS : {contact?.company?.bs}</Typography>
          </div>
          <div className="item">
            <Typography color="primary">Address</Typography>
            <Typography>City : {contact?.address?.city}</Typography>
            <Typography>Street : {contact?.address?.street}</Typography>
            <Typography>ZipCode : {contact?.address?.zipcode}</Typography>
          </div>
        </div>
        <div className="action">
          <div className="item">
            <Button
              variant="outlined"
              onClick={handleEditContact}
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </div>
          <div className="item">
            <Button
              variant="outlined"
              onClick={handleDialogOpen}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Contact"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"Are you sure, you want to delete this contact?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={handleDialogClose}
          >
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleProfileDelete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>{" "}
    </>
  );
};

export default Profile;
