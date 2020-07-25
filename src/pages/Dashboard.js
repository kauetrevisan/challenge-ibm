import React, { useState, useEffect, useMemo } from "react";
// Material ui
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
// Material icons
import { Search } from "@material-ui/icons";
// Components
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";
import Loading from "../components/Loading";
import CustomSnackbar from "../components/CustomSnackbar";
// Utils
import api from "../utils/api";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
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

  // Fetch the data when the page loads
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { data } = await api.get("users");

        setContacts(data);
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
      contact.name.toLowerCase().includes(searchTerm) ||
      contact.email.toLowerCase().includes(searchTerm);

    const searchTerm = searchValue.toLowerCase().trim();
    setFilteredContacts(contacts.filter((contact) => filterContact(contact, searchTerm)));
  }, [contacts, searchValue]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        {loading ? (
          <Loading message="Loading contacts" />
        ) : (
          <>
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

            <div className={classes.cardsContainer}>
              {filteredContacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
            </div>
          </>
        )}
      </div>

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
