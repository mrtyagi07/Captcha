import React, { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Captcha from "./Captcha";

const Form = () => {
  const [enteredCaptcha, setEnteredCaptcha] = useState("");
  const [captcha, setCaptcha] = useState(generateRandomString());
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredCaptcha == captcha) {
      console.log("Corrected!");
      toast.success("Account has been created!");

      // Clear the data from all input fields
      const inputs = formRef.current.querySelectorAll("input");
      inputs.forEach((input) => (input.value = ""));
      setCaptcha(generateRandomString());
    } else {
      toast.error("Captcha is not correct");
    }
  };
  const handleChange = (e) => {
    setEnteredCaptcha(e.target.value);
  };

  // Generates a random string for the CAPTCHA
  function generateRandomString() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 5; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  return (
    <form ref={formRef}>
      <input
        type="text"
        className="block border border-grey-light dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200 w-full p-3 rounded mb-4"
        placeholder="Full Name"
      />

      <input
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200"
        name="email"
        placeholder="Email"
      />

      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200"
        name="password"
        placeholder="Password"
      />
      <input
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4 dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200"
        name="confirm_password"
        placeholder="Confirm Password"
      />
      <Captcha
        captcha={captcha}
        setCaptcha={setCaptcha}
        generateRandomString={generateRandomString}
      />
      <input
        type="text"
        className="block border border-grey-light dark:bg-gray-500 dark:border-gray-400 dark:text-gray-200 w-full p-3 rounded mb-4"
        id="enteredCaptcha"
        placeholder="Enter Captcha"
        value={enteredCaptcha}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="w-full bg-gray-700 dark:bg-gray-800 text-center py-3 rounded bg-green text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 focus:outline-none my-1"
        onClick={handleSubmit}
      >
        Create Account
      </button>
    </form>
  );
};

export default Form;
