import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import kurlyLogo from "../images/kurlyChaser.png";

export const Header: React.FC = () => {
    const user = {
      verified:true
    }
    return (
      <>
      {
        !user.verified && 
        <div className="bg-red-500 p-3 text-center text-base text-white">
          <span >Please verify your email.</span>
        </div>
      }
        <header className="py-4">
          <div className="w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between items-center">
            <Link to="/">
              <img src={kurlyLogo} className="w-44" alt="Kurly Chaser" />
            </Link>
            <span className="text-xs">
              <Link to="/edit-profile">
                <FontAwesomeIcon icon={faUser} className="text-3xl" />
              </Link>
            </span>
          </div>
        </header>
      </>
    );
  };