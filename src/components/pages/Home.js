import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { VscTrash, VscEdit, VscEye } from "react-icons/vsc";
import Button from "../utility/Button";
function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);
  const navigate = useNavigate();

  // load user
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3333/user");
    setUsers(result.data.reverse());
  };

  // Delete user
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3333/user/${id}`);
    loadUser();
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col m-auto">
            <div className="card">
              <div className="card-header bg-dark">
                <h2 className="text-white text-center">User Table</h2>
              </div>
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Sl.</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                          <Link to={`/user/${user.id}`} className="btn ">
                            {<VscEye />}
                          </Link>
                          <Link
                            to={`/user/edit/${user.id}`}
                            className="btn mx-2"
                          >
                            {<VscEdit />}
                          </Link>
                          <Button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => deleteUser(user.id)}
                          >
                            {<VscTrash />}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
