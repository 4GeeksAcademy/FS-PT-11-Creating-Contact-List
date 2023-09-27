import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store } = useContext(Context);
  const contacts = store.contacts;

  console.log("contacts from store", store.contacts);

  contacts.map((contact) => (
    <span key={contact.id}>
      {contact.full_name}
      {console.log(contact.id, contact.full_name)}
    </span>
  ));

  console.log("contacts", contacts);
  return (
    <div className="container">
      <h1>Contact list</h1>
      <hr />
      <div>
        {contacts.map((contact) => (
          <span key={contact.id}>
            {contact.full_name}
            {console.log("data from home page", contact.id, contact.full_name)}
          </span>
        ))}
      </div>
    </div>
  );
};
