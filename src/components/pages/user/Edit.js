import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../utility/Button";
import Input from "../../utility/Input";

function Registration() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    url: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const { name, username, email, phone, url } = user;
  // onChange
  const getValue = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3333/user/${id}`, user);
    navigate("/");
  };

  // Load user
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3333/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-7 m-auto ">
          <div className="cardp-2">
            <div className="card-header bg-dark py-2">
              <h3 className="text-white text-center">User Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={formSubmit}>
                <Input
                  type="text"
                  value={name}
                  name="name"
                  className="form-control my-2"
                  placeholder="enter name"
                  onChange={(e) => getValue(e)}
                />
                <Input
                  type="text"
                  value={username}
                  name="username"
                  className="form-control my-2"
                  placeholder="username"
                  onChange={(e) => getValue(e)}
                />
                <Input
                  type="email"
                  value={email}
                  name="email"
                  className="form-control my-2"
                  placeholder="e-mail"
                  onChange={(e) => getValue(e)}
                />
                <Input
                  type="phone"
                  value={phone}
                  name="phone"
                  className="form-control my-2"
                  placeholder="+880"
                  onChange={(e) => getValue(e)}
                />
                <Input
                  type="text"
                  value={url}
                  name="url"
                  className="form-control my-2"
                  placeholder="https://"
                  onChange={(e) => getValue(e)}
                />
                <Button type="submit" className="btn btn-secondary mt-2 w-100">
                  Update
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
