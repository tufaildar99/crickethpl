import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSun,
  FaNewspaper,
  FaImage,
  FaCalendarAlt,
  FaTachometerAlt,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <Link to="/weather" className={styles.weatherIcon}>
        <FaSun size={24} />
      </Link>
      <h2>Hathlangoo Premier League</h2>

      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link to="/news" className={styles.navItem}>
              <FaNewspaper size={20} />
              <span className={styles.navText}>News</span>
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={styles.navItem}>
              <FaImage size={20} />
              <span className={styles.navText}>Gallery</span>
            </Link>
          </li>
          <li>
            <Link to="/fixtures" className={styles.navItem}>
              <FaCalendarAlt size={20} />
              <span className={styles.navText}>Fixtures</span>
            </Link>
          </li>
          <li>
            <Link to="/results" className={styles.navItem}>
              <FaTachometerAlt size={20} />
              <span className={styles.navText}>Results</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.navItem}>
              <FaPhone size={20} />
              <span className={styles.navText}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </header>
  );
};

export default Header;
