import React from "react";
import Form from "./Form";

const Signup = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col bg-white dark:bg-gray-700 dark:text-gray-100">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-gray-200 dark:bg-gray-600 dark:text-gray-100 px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Signup;
