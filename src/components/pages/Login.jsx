import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants/env";
import { setUserToken } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const formSubtmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const userCredentials = {
      email: form.email,
      password: form.password,
    };

    axios
      .post(`${API_URL}/public/login`, userCredentials)
      .then((response) => {
        setUserToken(response.data.data.token);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        if (error) {
          alert(`Por favor intenta de nuevo: ${error}`);
        }
        console.warn("Se ha producido un error " + error.toJSON());
        setLoading(false);
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
    </form>
  );
}

export default Login;
