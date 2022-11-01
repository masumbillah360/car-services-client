import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { singnInUser, setUser, updateUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    singnInUser(email, password)
      .then((result) => {
        handleUpdateUser(name);
        setUser(result.user);
      })
      .catch((err) => setUser(null));
  };

  const handleUpdateUser = (name) => {
    const profile = {
      displayName: name,
    };
    updateUser(profile)
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={loginImage} alt="loginimage" />
        </div>
        <div className="card shadow-2xl bg-base-100 p-16">
          <form onSubmit={handleSubmit} className="card-body">
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
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <p>
            Alreadey Have an Account
            <Link
              to="/login"
              className="underline ml-5 font-bold text-orange-600"
            >
              Login Please
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
