import React, { useState, useEffect } from "react";
// Components
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";
// Utils
import api from "../utils/api";
import { makeStyles } from "@material-ui/core";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get("users");

        setContacts(data);
      } catch (err) {
        // TODO: Handle error data
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className={classes.cardsContainer}>
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
