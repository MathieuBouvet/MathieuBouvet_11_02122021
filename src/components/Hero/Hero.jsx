import React from "react";
import PropTypes from "prop-types";

import styles from "./hero.module.scss";

class Hero extends React.Component {
  render() {
    return (
      <div
        className={styles.hero}
        style={{ backgroundImage: `url("${this.props.background}")` }}
      >
        {this.props.children != null && (
          <h2 className={styles.inside}>{this.props.children}</h2>
        )}
      </div>
    );
  }
}

Hero.propTypes = {
  children: PropTypes.string,
  background: PropTypes.string,
};

export default Hero;
