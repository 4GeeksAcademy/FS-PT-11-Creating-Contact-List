import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const NewContact = () => {
  const { store } = useContext(Context);
  const contacts = store.contacts;

  console.log("contacts from store", store.contacts);

  console.log("contacts", contacts);
  return (
    <div className="container">
      <h1>New Contact</h1>
      <hr />
      <div>
        <form>
          <label>
            Full name:
            <input type="text" placeholder="Full name" />
          </label>
          <br></br>
          <label>
            email:
            <input type="text" />
          </label>
          <label>
            Adress:
            <input type="text" />
          </label>
          <label>
            Fone number:
            <input type="number" />
          </label>
        </form>
      </div>
    </div>
  );
};
