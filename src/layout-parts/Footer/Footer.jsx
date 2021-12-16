import React from "react";

import styles from "./footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <img src="/logo-white.svg" alt="kasa" />
        <p className={styles.copyrights}>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
