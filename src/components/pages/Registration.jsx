import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCreateUser from "../../hooks/useCreateUser";

const Registration = () => {
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState();
  const { error, loading, createUser } = useCreateUser();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const formSubtmit = (e) => {
    e.preventDefault();

    const userCredentials = {
      email: form.email,
      password: form.password,
      name: form.name,
      avatar: form.avatar,
    };
    createUser(userCredentials);
  };

  return (
    <form
      className="max-w-sm mx-auto p-4 pt-8 bg-white shadow-md rounded-lg"
      onSubmit={formSubtmit}
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Full Name{" "}
        </label>
        <input
          id="name"
          type="text"
          placeholder="Daniel Corralejo"
          value={form.name || ""}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="avatar"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Avatar{" "}
        </label>
        <input
          id="avatar"
          type="text"
          placeholder="https://www.w3schools.com/html/img_submit.gif"
          value={form.avatar || ""}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email{" "}
        </label>
        <input
          id="email"
          type="email"
          placeholder="test@test.com"
          value={form.email || ""}
          onChange={handleChange}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Create Password{" "}
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password || ""}
          required
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {loading ? <>Loading...</> : <>Create Account</>}
        </button>
      </div>
      <div className="flex justify-center">
        <Link to="/login">
          <p>Sign In here</p>
        </Link>
      </div>
      {error && (
        <p className="flex justify-center bg-red-100 text-red-800">
          An error ocurred
        </p>
      )}
    </form>
  );
};

export default Registration;
