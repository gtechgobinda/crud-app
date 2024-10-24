import axios from "axios";
import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Name"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Email"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Login
        </button>
      </form>
    </>
  );
};

export default Register;
