import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./accomodationCard.module.scss";

class AccomodationCard extends React.Component {
  render() {
    return (
      <Link
        className={styles.accomodationCard}
        style={{ backgroundImage: `url("${this.props.cover}")` }}
        to={`/accomodations/${this.props.id}`}
      >
        <span className={styles.title}>{this.props.children}</span>
      </Link>
    );
  }
}
AccomodationCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

export default AccomodationCard;
