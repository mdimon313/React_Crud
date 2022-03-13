import React from "react";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 m-auto p-2">
          <div className="card p-2">
            <form>
              <input type="text" placeholder="Name" class="form-control" />
              <input type="text" placeholder="Name" class="form-control mt-2" />
              <button type="button" className="btn btn-success w-100 mt-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
