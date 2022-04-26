import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { stringAvatar } from "./../helpers";
import "./ContactCard.css";

const ContactCard = ({ contact }) => {
  const navigate = useNavigate();
  const handleViewContact = () => {
    navigate(`/contact/${contact.id}`);
  };

  return (
    <TableRow key={contact?.id}>
      <TableCell onClick={handleViewContact}>
        <div className="name">
          <Avatar {...stringAvatar(contact?.name)}></Avatar>
          {contact?.name}
        </div>
      </TableCell>
      <TableCell>{contact?.email}</TableCell>
      <TableCell>{contact?.phone}</TableCell>
      <TableCell>{contact?.website}</TableCell>
      <TableCell>{contact?.address?.city}</TableCell>
      <TableCell>{contact?.address?.zipcode}</TableCell>
    </TableRow>
  );
};

export default ContactCard;
