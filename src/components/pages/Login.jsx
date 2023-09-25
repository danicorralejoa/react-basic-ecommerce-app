import React, { useState } from "react";
import axios from "axios";
import { ALTERNATIVE_API_URL, API_URL } from "../../constants/env";
import { setUserToken } from "../../helpers/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const formSubtmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError();

    const userCredentials = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${ALTERNATIVE_API_URL}/auth/login/`, userCredentials)
      .then((response) => {
        setUserToken(response.data.access_token, response.data.refresh_token);
        setLoading(false);
        console.warn(
          `User Logged In succesfully ${JSON.stringify(response.data)}`
        );
        navigate("/");
      })
      .catch((err) => {
        console.warn("Se ha producido un error: " + err);
        setLoading(false);
        setError(err);
      });
  };

  return (
    <form
      className="max-w-sm mx-auto p-4 pt-8 bg-white shadow-md rounded-lg"
      onSubmit={formSubtmit}
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          User email{" "}
        </label>
        <input
          id="email"
          type="email"
          placeholder="test@test.com"
          value={form.email}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Enter Password{" "}
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? <>Loading...</> : <>Sign In</>}
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/register">
          <p>Register here</p>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <p>Go Back Homepage</p>
        </Link>
      </div>
      {error && (
        <p className="flex justify-center bg-red-100 text-red-800">
          An error ocurred
        </p>
      )}
    </form>
  );
}

export default Login;
