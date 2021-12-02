import React from "react";

import { accomodations } from "../../dataLayer";

import Hero from "../../components/Hero";
import AccomodationCard from "../../components/AccomodationCard/AccomodationCard";

import styles from "./home.module.scss";

class Home extends React.Component {
  render() {
    return (
      <>
        <Hero background="./images/background-home.jpg">
          Chez vous, partout et ailleurs
        </Hero>
        <section className={styles.accomodationContainer}>
          {accomodations.map(accomodation => (
            <AccomodationCard
              key={accomodation.id}
              id={accomodation.id}
              cover={accomodation.cover}
            >
              {accomodation.title}
            </AccomodationCard>
          ))}
        </section>
      </>
    );
  }
}

export default Home;
