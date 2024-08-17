import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import {
  faHome,
  faKey,
  faRobot,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export const SideBarComponent = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
      </button>
      <nav
        className={`w-1/6 bg-custom-dark min-h-screen p-4 min-w-44 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <Link to={"/"} className="flex">
          <h2
            className={`text-white font-sans text-2xl mb-8 flex items-center cursor-pointer hover:text-green-500 transition duration-300 ml-5 ${
              location.pathname === "/"
                ? "text-green-500 border-l-4 border-green-500 pl-2"
                : ""
            }`}
          >
            <FontAwesomeIcon icon={faHome} size="1x" className="mr-2" />
            Home Page
          </h2>
        </Link>
        <ul className="space-y-6">
          <Link
            to={"/api-key"}
            className={`flex items-center text-xl text-white transition duration-300 cursor-pointer border-2 border-transparent hover:bg-purple-800 hover:border-purple-400 py-5 rounded-2xl ${
              location.pathname === "/api-key"
                ? "bg-purple-800 border-purple-400"
                : ""
            }`}
          >
            <li className="ml-5 ">
              <FontAwesomeIcon icon={faKey} size="lg" className="mr-3 w-8" />
              <span>API Key</span>
            </li>
          </Link>
          <Link
            to={"/chat"}
            className={`flex items-center text-xl text-white transition duration-300 cursor-pointer border-2 border-transparent hover:bg-purple-800 hover:border-purple-400 py-5 rounded-2xl ${
              location.pathname === "/chat"
                ? "bg-purple-800 border-purple-400"
                : ""
            }`}
          >
            <li className="ml-5 ">
              <FontAwesomeIcon icon={faRobot} size="lg" className="mr-3 w-8" />
              <span>AI Chat</span>
            </li>
          </Link>
          <Link
            to={"/contact"}
            className={`flex items-center text-xl text-white transition duration-300 cursor-pointer border-2 border-transparent hover:bg-purple-800 hover:border-purple-400 py-5 rounded-2xl ${
              location.pathname === "/contact"
                ? "bg-purple-800 border-purple-400"
                : ""
            }`}
          >
            <li className="ml-5">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                className="mr-3 w-8"
              />
              <span>Contact</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
