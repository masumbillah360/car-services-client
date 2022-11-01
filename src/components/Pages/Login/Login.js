import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../assets/images/login/login.svg";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Login = () => {
  const { loginGoogle, setUser, loginEmailPass } = useContext(AuthContext);

  const googleHandler = () => {
    const provider = new GoogleAuthProvider();
    loginGoogle(provider)
      .then((result) => setUser(result.user))
      .catch((error) => setUser(null));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginEmailPass(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setUser(null));
  };
  return (
    <div className="hero">
      <div className="hero-content grid grid-cols-1 md:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={loginImage} alt="loginimage" />
        </div>
        <div className="card shadow-2xl bg-base-100 p-16">
          <button onClick={googleHandler}>Google</button>
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="font-bold text-4xl text-center">Login</h1>
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
