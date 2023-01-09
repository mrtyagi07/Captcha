import React from "react";
import Switcher from "./Switcher";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 flex justify-between py-2 px-4 dark:bg-gray-800 dark:text-gray-200">
      <div className="mb-2 sm:mb-0">
        <p className="text-xl font-bold no-underline text-grey-darkest hover:text-blue-dark">
          Captcha
        </p>
      </div>
      <div>
        <p className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">
          <Switcher />
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
