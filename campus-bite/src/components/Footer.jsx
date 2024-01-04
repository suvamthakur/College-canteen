import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-yellow text-base-content font-semibold">
        <aside>
            LOGO
          <p>
            Campus Bite
            <br />
            Copyright ©2024, XYZ University
          </p>
        </aside>
        <nav>
          <header className="text-lg font-bold">Useful Links</header>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <header className="text-lg font-bold">Gallery</header>
          <a className="link link-hover">Foods</a>
          <a className="link link-hover">Activities</a>
          <a className="link link-hover">Food Festivals</a>
        </nav>
        <nav>
          <header className="text-lg font-bold">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
