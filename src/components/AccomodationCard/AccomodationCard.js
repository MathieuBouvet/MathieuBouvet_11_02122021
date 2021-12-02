import React from "react";
import PropTypes from "prop-types";

import styles from "./accomodationCard.module.scss";

class AccomodationCard extends React.Component {
  render() {
    return (
      <a
        className={styles.accomodationCard}
        style={{ backgroundImage: `url("${this.props.cover}")` }}
        href={`/accomodations/${this.props.id}`}
      >
        <span className={styles.title}>{this.props.children}</span>
      </a>
    );
  }
}
AccomodationCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

export default AccomodationCard;
