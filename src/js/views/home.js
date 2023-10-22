import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const contacts = store.contacts;

  // useEffect(() => {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetchApi("agenda/Xomano", "GET");
  //     console.log("Resposta da API:", response);

  //     if (Array.isArray(response)) {
  //       setStore({ contacts: response });
  //     } else {
  //       console.error("Resposta da API não é um array válido.");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao buscar dados da API:", error);
  //   }
  // };

  // fetchData();
  // }, []);

  return (
    <div className="container">
      <h1>Contact list</h1>
      <hr />
      <div>
        {Array.isArray(contacts) &&
          contacts.map((contact) => (
            <div key={contact.id}>
              <Link to={`/Contact/${contact.id}`}>
                <p>{contact.full_name}</p>
              </Link>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};
