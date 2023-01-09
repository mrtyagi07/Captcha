import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Signup />
    </>
  );
};

export default App;
