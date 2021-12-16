import React from "react";

import cx from "../../utils/cx";

import { NavLink, Link } from "react-router-dom";

import styles from "./header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>
          <Link to="/"><img src="/logo-full.svg" alt="kasa" /></Link>
        </h1>
        <nav>
          <ul className={styles.navigationMenu}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cx(styles.navigationLink, { [styles.active]: isActive })
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cx(styles.navigationLink, { [styles.active]: isActive })
                }
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
