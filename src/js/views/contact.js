import React, { useContext, useState, useRef, useEffect } from "react";
import "../../styles/contact.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const contactRef = useRef(null);
  const navigate = useNavigate();

  // Mover a chamada do useState para o início
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      const response = await actions.fetchApi(`${id}`, "GET");
      console.log("user details", response);
      contactRef.current = response;
    };

    fetchContact();
  }, []);

  const contact = contactRef.current;

  if (!contact) {
    return <div>Carregando...</div>;
  }

  if (!contact.full_name) {
    return <div>Não é possível carregar o contato.</div>;
  }

  const handleSave = () => {
    actions.saveContact();
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    actions.deleteContact(id);
    navigate("/");
  };

  return (
    <div className="contact container">
      <div className="container">
        <div>{contact.full_name}</div>
        <div>{contact.phone}</div>
        <div>{contact.email}</div>
        <div>{contact.address}</div>
      </div>

      {editMode && (
        <div>
          <input
            type="text"
            value={contact.full_name}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            type="text"
            value={contact.phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={handleCancel}>Cancelar</button>
        </div>
      )}

      <button onClick={handleEdit}>Editar</button>
      <button onClick={handleDelete}>Excluir</button>
    </div>
  );
};
