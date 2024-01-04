import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Modal from "./Modal";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".navbar");
      if (nav) {
        if (window.scrollY > 20) {
          nav.classList.add("navbar-scrolled");
        } else {
          nav.classList.remove("navbar-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <header className="">
      <div className="navbar section-container z-10 fixed bg-primaryBG">
        <div className="flex-1">
          <a href="/">
            {/* <img src={logo} alt="" /> */}
            LOGO
          </a>
        </div>
        <div className="flex-none">
          {/* Search button */}
          <button className="btn btn-ghost btn-circle hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Add to cart */}
          <Link to="cart-page">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Contact button */}
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn flex items-center gap-2 rounded-full px-6 bg-yellow text-secondary"
          >
            <FaRegUser /> Login
          </button>
          <Modal />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
