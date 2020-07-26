import React, { useState, useEffect, useMemo } from "react";
// Material ui
import { makeStyles, TextField, InputAdornment, Button } from "@material-ui/core";
// Material icons
import { Search } from "@material-ui/icons";
// Components
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";
import Loading from "../components/Loading";
import CustomSnackbar from "../components/CustomSnackbar";
import SortButtons from "../components/SortButtons";
// Utils
import api from "../utils/api";
import AddContactsDialog from "../components/AddContactsDialog";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    justifyContent: "center",
  },
}));

const Dashboard = () => {
  // Hooks
  const classes = useStyles();

  // States
  const [contacts, setContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, type: "info", message: "" });
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [sortDirection, setSortDirection] = useState("desc");

  // Fetch the data when the page loads
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { data } = await api.get("GetCustomers/retrievecustomers", {
          headers: { "X-IBM-Client-Id": process.env.REACT_APP_IBM_KEY },
        });

        console.log(data);
        setContacts(data.Customers);
      } catch (err) {
        console.log(err, err.response);

        setSnackbar({
          open: true,
          type: "error",
          message: "An error happened when getting the contacts",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter the contacts
  useMemo(() => {
    const filterContact = (contact, searchTerm) =>
      contact.Name.toLowerCase().includes(searchTerm) ||
      contact.Email.toLowerCase().includes(searchTerm);

    const searchTerm = searchValue.toLowerCase().trim();
    setFilteredContacts(contacts.filter((contact) => filterContact(contact, searchTerm)));
  }, [contacts, searchValue]);

  const sortByName = (a, b) => {
    const sortNum = a.Name > b.Name ? 1 : -1;

    return sortDirection === "desc" ? sortNum : sortNum * -1;
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        {loading ? (
          <Loading message="Loading contacts" />
        ) : (
          <>
            <div className="text-right">
              <Button variant="outlined" onClick={() => setOpenAddDialog(true)}>
                Add contacts
              </Button>
            </div>

            <div className="d-flex align-items-center mt-3">
              <TextField
                id="search"
                placeholder="Search"
                fullWidth
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="ml-3 mr-3"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />

              <SortButtons value={sortDirection} setValue={setSortDirection} />
            </div>

            <div className={classes.cardsContainer}>
              {filteredContacts.sort(sortByName).map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
            </div>
          </>
        )}
      </div>

      <AddContactsDialog
        open={openAddDialog}
        onClose={() => setOpenAddDialog(false)}
        setSnackbar={setSnackbar}
      />

      <CustomSnackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        type={snackbar.type}
        message={snackbar.message}
      />
    </>
  );
};

export default Dashboard;
