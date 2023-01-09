import React, { useState } from "react";

const Captcha = ({ captcha, setCaptcha, generateRandomString }) => {
  return (
    <div className=" flex justify-center items-center mb-4">
      <p className="bg-gray-100 dark:bg-gray-500  inline-flex py-3 px-5 rounded-lg items-center  focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setCaptcha(generateRandomString())}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>

        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="title-font font-medium">{captcha}</span>
        </span>
      </p>
    </div>
  );
};

export default Captcha;
