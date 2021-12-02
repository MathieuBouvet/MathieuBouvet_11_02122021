import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";

import styles from "./layout.module.scss";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default Layout;
