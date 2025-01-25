import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import s from "./Header.module.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      once: true, // Анимация срабатывает один раз
    });
  }, []);

  return (
    <section className={s.header}>
      <div className="container">
        <nav className={s.nav}>
          {/* Логотип */}
          <div
            className={s.logo}
            data-aos="fade-down"
            data-aos-delay="100"
          >
            &lt;logo/&gt;
          </div>

          {/* Ссылки */}
          <div
            className={`${s.link} ${menuOpen ? s.active : ""}`}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <a href="#About">About</a>
            <a href="#Skill">Skills</a>
            <a href="#Projects">Projects</a>
            <button data-aos="zoom-in" data-aos-delay="300">
              <a href="#Contact">Contact Me</a>
            </button>
          </div>

          {/* Бургер-меню */}
          <div
            className={s.burger}
            onClick={toggleMenu}
            data-aos="fade-down"
            data-aos-delay="400"
          >
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
