import React from "react";
import PropTypes from "prop-types";

import styles from "./title.module.scss";

class Title extends React.Component {
  static propTypes = {
    children: PropTypes.string,
    background: PropTypes.string,
  };
  render() {
    return (
      <h2
        className={styles.title}
        style={{ backgroundImage: `url("${this.props.background}")` }}
      >
        <span className={styles.inside}>{this.props.children}</span>
      </h2>
    );
  }
}

export default Title;
