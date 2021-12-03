import React from "react";

import { Link } from "react-router-dom";

import styles from "./notFound.module.scss";

class NotFound extends React.Component {
  render() {
    return (
      <div className={styles.notFound}>
        <p className={styles.errorCode}>404</p>
        <p className={styles.errorMessage}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className={styles.link}>
          Retourner sur la page d’accueil
        </Link>
      </div>
    );
  }
}

export default NotFound;
