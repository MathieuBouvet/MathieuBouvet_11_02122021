import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./layout.module.scss";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <div className={styles.wrapper}>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
