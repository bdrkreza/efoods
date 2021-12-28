import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userType } from "../services/api/authService";
import { login } from "../services/redux/actionCreator/authAction";
import { AppState } from "../services/redux/stores";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<userType>({
    email: "",
    password: "",
  });

  console.log(formData);
  const { data, status, error } = useSelector((state: AppState) => state.auth);

  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (data) {
    navigate("/");
  }
  return (
    <div className="container vh-100">
      <div className="bg"></div>
      <main className="form-signin">
        <h1 className="h3">Login</h1>
        {status === "error" && (
          <div className="alert alert-success" role="alert">
            {error}
          </div>
        )}
        <form>
          <div className="form-floating">
            <input
              onChange={handleOnChange}
              name="email"
              type="email"
              className="form-control"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              onChange={handleOnChange}
              name="password"
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                value="1"
                name="remember_me"
                id="rememberMeSwitch"
              />
              <label className="form-check-label" htmlFor="rememberMeSwitch">
                Remember me
              </label>
            </div>
          </div>
          <button
            disabled={status === "pending"}
            onClick={() => dispatch(login(formData))}
            className="w-100 btn btn-lg"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <p className="copyright">&copy; 2021</p>
      </main>
    </div>
  );
}
