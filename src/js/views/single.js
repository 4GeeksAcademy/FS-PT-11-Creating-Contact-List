import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);

  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Address, setAddress] = useState();

  const params = useParams();
  return (
    <div className="container">
      <div className="row">
        <h1 className="d-flex justify-content-center">Add a New Contact</h1>
        <form id="frm1" action="/action_page.php">
          <div class="mb-3">
            <label for="basic-url" class="form-label">
              Full Name
            </label>
            <div class="input-group">
              <input
                onClick={(e) => setName(e.target.value)}
                type="text"
                class="form-control"
                placeholder=" Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="basic-url" class="form-label">
              Email
            </label>
            <div class="input-group">
              <input
                onClick={(e) => setEmail(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Enter Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="basic-url" class="form-label">
              Phone
            </label>
            <div class="input-group">
              <input
                onClick={(e) => setPhone(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Enter Phone"
                aria-label="Enter Phone"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="basic-url" class="form-label">
              Address
            </label>
            <div class="input-group">
              <input
                onClick={(e) => setAddress(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Enter Address"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="d-grid gap-2">
            <input
              className="btn btn-primary"
              type="button"
              onclick="myFunction()"
              value="save"
            />
          </div>
        </form>
      </div>
      <Link to="/">
        <a href="#" className="card-link">
          or get back to contacts
        </a>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
