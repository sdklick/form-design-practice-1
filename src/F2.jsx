import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const F2 = () => {
  const [data, setdata] = useState(false);
  const [s1, sets1] = useState();

  let signincss = {
    border: "2px solid green",
    backgroundColor: "wheat",
    borderRadius: "20px",
    transition: "0.1s",
  };

  return (
    <>
      <div class="container text-center p-3 mt-3 bg-info bg-opacity-10 border border-info  rounded-end">
        <div class="row">
          <div class="col">
            <h1
              onClick={() => {
                setdata(true), sets1("signin");
              }}
              class="nav-item p-2"
              style={s1 == "signin" ? signincss : null}
            >
              SignIn
            </h1>
          </div>
          <div className="vr bg-success"></div>
          <div class="col">
            <h1
              onClick={() => {
                setdata(true), sets1("signup");
              }}
              class="nav-item p-2"
              style={s1 == "signup" ? signincss : null}
            >
              SignUp
            </h1>
          </div>
        </div>
      </div>
      {data && s1 == "signin" ? (
        <div class="card text-center mt-5 container text-center p-3 mt-3 bg-info bg-opacity-10 border border-info  rounded-end">
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Signin
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* signup */}
      {data && s1 == "signup" ? (
        <div className="container text-center p-3 mt-5 bg-info bg-opacity-10 border border-info  rounded-end">
          <form class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">
                Password
              </label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">
                Address 2
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">
                City
              </label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">
                State
              </label>
              <select id="inputState" class="form-select">
                <option selected>Choose...</option>
                <option>West bengal</option>
                <option>Outher</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">
                Pin
              </label>
              <input type="text" class="form-control" id="inputZip" />
            </div>

            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};

export default F2;
