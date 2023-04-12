import React, { useState } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [menuBar, setMenuBar] = useState(false);
  const handleMenuBars = () => {
    setMenuBar((prevCheck) => !prevCheck);
  };
  return (
    <div className={styles.headerInner}>
      <div className={styles.headerNameWrapper}>SB</div>
      <div className={styles.hearderNavWrapper}>
        <nav>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>RESUME</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
      <div className={styles.socialIconsWrapper}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} height={20} color="#605B5B" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} height={20} color="#605B5B" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} height={20} color="#605B5B" />
          </li>
          {menuBar === false ? (
            <li className={styles.menuBar}>
              <FontAwesomeIcon icon={faBars} height={22} color="#605B5B" onClick={handleMenuBars} />
            </li>
          ) : (
            <li className={styles.menuBar}>
              <FontAwesomeIcon icon={faXmark} height={24} color="#605B5B" onClick={handleMenuBars} />
            </li>
          )}
        </ul>
      </div>
      {menuBar === true ? (
        <div className={styles.menuBarItemsDiv}>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICE</li>
            <li>RESUME</li>
            <li>CONTACT</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
