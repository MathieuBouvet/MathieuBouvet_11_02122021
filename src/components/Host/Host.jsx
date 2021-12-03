import React from "react";
import PropTypes from "prop-types";

import cx from "../../utils/cx";

import styles from "./host.module.scss";

class Host extends React.Component {
  render() {
    const [firstName, lastName] = this.props.name.split(" ");
    return (
      <div className={cx(styles.host, this.props.className)}>
        <div className={styles.nameContainer}>
          <p className={styles.name}>{firstName}</p>
          <p className={styles.name}>{lastName}</p>
        </div>
        <img
          className={styles.image}
          src={this.props.imageUrl}
          alt={this.props.name}
        />
      </div>
    );
  }
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Host;
