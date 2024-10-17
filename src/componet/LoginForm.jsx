import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email:"",
    username: "",
    password: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container bg-gray-600 w-full justify-center">
      <div className="main   m-auto bg-white rounded  h-screen w-1/3">
        <h1 className="text-2xl font-semibold text-center py-4">Login Form</h1>
        <form action="" onSubmit={onSubmit} className="p-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="email"
              id="username"
              placeholder="Email Address"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500  px-4 py-1 rounded font-semibold text-white hover:bg-gray">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
