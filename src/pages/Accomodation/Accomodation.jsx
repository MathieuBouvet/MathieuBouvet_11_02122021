import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

import withRouteParams from "../../utils/withRouteParam";

import { getAccomodationById } from "../../dataLayer";

import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host";
import Carousel from "../../components/Carousel";

import styles from "./accomodation.module.scss";

class Accomodation extends React.Component {
  render() {
    const accomodation = getAccomodationById(this.props.params.id);
    if (accomodation == null) {
      return <Navigate to="/404" />;
    }
    return (
      <>
        {accomodation.pictures.length > 1 ? (
          <Carousel images={accomodation.pictures} />
        ) : (
          <img
            src={accomodation.pictures[0]}
            alt=""
            className={styles.accomodationPicture}
          />
        )}
        <div className={styles.accomodationInfo}>
          <h2 className={styles.title}>{accomodation.title}</h2>
          <Host
            className={styles.host}
            name={accomodation.host.name}
            imageUrl={accomodation.host.picture}
          />
          <p className={styles.location}>{accomodation.location}</p>
          <div className={styles.tags}>
            {accomodation.tags.map((tag, index) => (
              <div className={styles.tag} key={index}>
                {tag}
              </div>
            ))}
          </div>
          <Rating className={styles.rating}>
            {Number(accomodation.rating)}
          </Rating>
        </div>
        <div className={styles.descriptionAndEquipements}>
          <Collapse title="Description" className={styles.collapsible}>
            {accomodation.description}
          </Collapse>
          <Collapse title="Equipements" className={styles.collapsible}>
            <ul className={styles.equipmentList}>
              {accomodation.equipments.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </>
    );
  }
}

Accomodation.propTypes = {
  params: PropTypes.objectOf(PropTypes.string).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default withRouteParams(Accomodation);
