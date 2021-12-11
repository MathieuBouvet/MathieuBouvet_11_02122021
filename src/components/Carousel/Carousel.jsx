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
      slide: null,
    };
  }

  changeCurrentImage = step => {
    this.setState(state => {
      const imagesLength = this.props.images.length;
      return {
        currentImageIndex: modulo(state.currentImageIndex + step, imagesLength),
        slide: step > 0 ? "left" : "right",
      };
    });
  };

  render() {
    const { images } = this.props;
    const { currentImageIndex, slide } = this.state;

    const currentImage = images[currentImageIndex];
    const previousImage = images[modulo(currentImageIndex - 1, images.length)];
    const nextImage = images[modulo(currentImageIndex + 1, images.length)];

    return (
      <div className={styles.carousel}>
        <div
          className={styles.pictureContainer}
          onAnimationEnd={() => {
            this.setState(state => ({ ...state, slide: null }));
          }}
        >
          {/* img tags have keys to prevent the browser from fetching the same image between renders, 
              and thus providing a clean user experience, without image flashes when using the carousel
          */}
          <img
            src={previousImage}
            key={images.length > 2 || slide !== "right" ? previousImage : ""}
            alt=""
            className={cx(styles.picture, styles.previous, {
              [styles.slideLeft]: slide === "left",
              [styles.slideRight]: slide === "right",
            })}
          />
          <img
            key={currentImage}
            src={currentImage}
            alt=""
            className={cx(styles.picture, {
              [styles.slideLeft]: slide === "left",
              [styles.slideRight]: slide === "right",
            })}
          />
          <img
            src={nextImage}
            key={images.length > 2 || slide === "right" ? nextImage : ""}
            alt=""
            className={cx(styles.picture, styles.next, {
              [styles.slideLeft]: slide === "left",
              [styles.slideRight]: slide === "right",
            })}
          />
        </div>
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
            {this.state.currentImageIndex + 1}/{images.length}
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
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
