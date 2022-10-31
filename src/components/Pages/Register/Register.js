import React from "react";
import loginImage from "../../../assets/images/login/login.svg";

const Register = () => {
  return (
    <div className="hero">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={loginImage} alt="loginimage" />
        </div>
        <div className="card shadow-2xl bg-base-100 p-16">
          <form className="card-body">
            <h1 className="font-bold text-4xl text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="Full Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                required
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
