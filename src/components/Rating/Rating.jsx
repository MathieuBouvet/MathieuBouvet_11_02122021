import React from "react";
import PropTypes from "prop-types";

import cx from "../../utils/cx";

import styles from "./rating.module.scss";

class Rating extends React.Component {
  render() {
    const starStatus = new Array(5);
    starStatus.fill("empty");
    for (let i = 0; i < this.props.children; i++) {
      starStatus[i] = "full";
    }

    return (
      <div className={cx(styles.rating, this.props.className)}>
        {starStatus.map(status => (
          <img src={`/star-${status}.svg`} alt={`star ${status}`} />
        ))}
      </div>
    );
  }
}

Rating.propTypes = {
  className: PropTypes.string,
  children: PropTypes.number.isRequired,
};

export default Rating;
