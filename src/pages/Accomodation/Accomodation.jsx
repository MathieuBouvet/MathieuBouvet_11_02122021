import React from "react";
import PropTypes from "prop-types";

import withRouteParams from "../../utils/withRouteParam";
import withNavigate from "../../utils/withNavigate";

import { getAccomodationById } from "../../dataLayer";

import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host";

import styles from "./accomodation.module.scss";

class Accomodation extends React.Component {
  render() {
    const accomodation = getAccomodationById(this.props.params.id);
    if (accomodation == null) {
      return null;
    }
    return (
      <>
        {/*TODO : carousel */}
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
          <Rating className={styles.rating}>{Number(accomodation.rating)}</Rating>
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

  componentDidMount() {
    const accomodation = getAccomodationById(this.props.params.id);
    if (accomodation == null) {
      setTimeout(() => this.props.navigate("/404", { replace: true }));
    }
  }
}

Accomodation.propTypes = {
  params: PropTypes.objectOf(PropTypes.string).isRequired,
  navigate: PropTypes.func.isRequired,
};

export default withNavigate(withRouteParams(Accomodation));
