import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const googleHandler = () => {
    const provider = new GoogleAuthProvider();
    loginUser(provider)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={loginImage} alt="loginimage" />
        </div>
        <div className="card shadow-2xl bg-base-100 p-16">
          <form className="card-body">
            <h1 className="font-bold text-4xl text-center">Login</h1>
            <button onClick={googleHandler}>Google</button>
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
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p>
            Don't Have an Account
            <Link
              to="/register"
              className="underline ml-5 font-bold text-orange-600"
            >
              Register Please
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
