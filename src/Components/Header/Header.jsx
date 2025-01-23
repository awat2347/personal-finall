import React, { useState } from "react";
import s from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          <div className={s.logo}>&lt;logo/&gt;</div>

          <div className={`${s.link} ${menuOpen ? s.active : ""}`}>
            <a href="#About">About</a>
            <a href="#Skill">Skills</a>
            <a href="#Projects">Projects</a>
            <button><a href="">Contact Me</a></button>
          </div>

          <div className={s.burger} onClick={toggleMenu}>
            <span className={menuOpen ? s.open : ""}></span>
            <span className={menuOpen ? s.open : ""}></span>
            <span className={menuOpen ? s.open : ""}></span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
