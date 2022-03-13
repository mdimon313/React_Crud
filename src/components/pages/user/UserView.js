import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserView() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    url: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  // Load user
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3333/user/${id}`);
    setUser(result.data);
  };

  const { name, username, email, phone, url } = user;
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 m-auto">
          <div className="card">
            <div className="card-header">
              <h3>Name: {name}</h3>
            </div>
            <div className="card-body">
              <h4>Id: {id}</h4>
              <h5>Username: {username}</h5>
              <h5>E-mail: {email}</h5>
              <h5>Phone: {phone}</h5>
              <h5>URL: {url}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserView;
