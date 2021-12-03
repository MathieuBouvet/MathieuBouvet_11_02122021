import React from "react";
import PropTypes from "prop-types";

import cx from "../../utils/cx";

import styles from "./collapse.module.scss";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }

  toggle = () => {
    this.setState(state => ({
      ...state,
      isOpened: !state.isOpened,
    }));
  };

  render() {
    return (
      <div className={cx(styles.collapse, this.props.className)}>
        <button className={styles.trigger} onClick={this.toggle}>
          {this.props.title}
          <img
            src="/chevron-up.svg"
            alt={`chevron vers le ${this.state.isOpened ? "bas" : "haut"}`}
            className={cx(styles.chevron, {
              [styles.down]: this.state.isOpened,
            })}
          />
        </button>
        <div
          className={cx(styles.content, {
            [styles.opened]: this.state.isOpened,
          })}
        >
          <div className={styles.wrapper}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
};

export default Collapse;
