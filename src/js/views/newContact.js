// import React, { useContext, useEffect, useState } from "react";
// import "../../styles/home.css";
// import { Context } from "../store/appContext";

// export const NewContact = () => {
//   const { store } = useContext(Context);
//   const contacts = store.contacts;

//   console.log("contacts from store", store.contacts);

//   console.log("contacts", contacts);
//   return (
//     <div className="container">
//       <h1>New Contact</h1>
//       <hr />
//       <div>
//         <form>
//           <label>
//             Full name:
//             <input type="text" placeholder="Full name" />
//           </label>
//           <br></br>
//           <label>
//             email:
//             <input type="text" />
//           </label>
//           <label>
//             Adress:
//             <input type="text" />
//           </label>
//           <label>
//             Fone number:
//             <input type="number" />
//           </label>
//         </form>
//       </div>
//     </div>
//   );
// };

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const NewContact = () => {
  const { actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      full_name: fullName,
      email: email,
      agenda_slug: "Xomano",
      address: address,
      phone: phoneNumber,
    };

    const jsonData = JSON.stringify(newContact);

    await actions.saveContact("", "POST", jsonData);
    console.log("submited");

    navigate("/");
  };

  return (
    <div className="container">
      <h1>New Contact</h1>
      <hr />
      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Full name:
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <br />
          <label>
            Phone number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Save Contact</button>
        </form>
      </div>
    </div>
  );
};
