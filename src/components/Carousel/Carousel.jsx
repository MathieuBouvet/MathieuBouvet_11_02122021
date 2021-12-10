import React from "react";
import PropTypes from "prop-types";

import cx from "../../utils/cx";
import modulo from "../../utils/modulo";

import styles from "./carousel.module.scss";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImageIndex: 0,
    };
  }

  changeCurrentImage = step => {
    this.setState(state => {
      const imagesLength = this.props.images.length;
      return {
        currentImageIndex: modulo(state.currentImageIndex + step, imagesLength),
      };
    });
  };

  render() {
    const imagesLength = this.props.images.length;
    return (
      <div className={styles.carousel}>
        <img
          src={this.props.images[this.state.currentImageIndex]}
          alt=""
          className={styles.picture}
        />
        {imagesLength > 1 && (
          <div className={styles.overlay}>
            <button
              onClick={() => this.changeCurrentImage(-1)}
              className={styles.button}
            >
              <img
                src="/chevron-up.svg"
                alt="chevron vers la droite"
                className={cx(styles.chevron, styles.chevronRight)}
              />
            </button>
            <p className={styles.displayedImageNumber}>
              {this.state.currentImageIndex + 1}/{imagesLength}
            </p>
            <button
              onClick={() => this.changeCurrentImage(1)}
              className={styles.button}
            >
              <img
                src="/chevron-up.svg"
                alt="chevron vers la gauche"
                className={cx(styles.chevron, styles.chevronLeft)}
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
