import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
  Stack,
  CircularProgress,
  TablePagination,
} from "@mui/material";
import { getContacts, getLoader } from "./../../store/selectors/dataModel";
import ContactCard from "./ContactCard";

const columns = ["Name", "Email", "Phone", "Website", "City", "ZipCode"];

const ContactList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoader);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (isLoading) {
    return (
      <Stack alignItems="center">
        <CircularProgress sx={{ width: 500, height: 500 }} />
      </Stack>
    );
  }

  return (
    <>
      <TableContainer comonent={Paper}>
        <Table
          stickyHeader={true}
          sx={{ minWidth: 650 }}
          aria-label="contact table"
        >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts && contacts.length
              ? contacts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                  ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={contacts && contacts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ContactList;
