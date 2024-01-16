// import { useState, useEffect } from 'react';
import Image from "next/image";
// import profilePic from "../public/images/AngieR_profile_min_2.png";
import styles from "../../styles/Home.module.scss";
import portfolioStyles from "./styles.module.scss";
import projectData from "../../data/projects.json"

export default function Portfolio() {
  return (
    <div className={ `${styles.portfolio} ${portfolioStyles.portfolio} ${styles.pageMargin}` } id="portfolio">
      <div>
        <h2 className={ styles.headingOne }>My Favorite Projects</h2>
        { projectData.map(dataItem => (
          <div key={ dataItem.name } className={ `${styles.githubProject} ${portfolioStyles.sectionPortfolioFlex}` } style={ { minHeight: "100vh" } }>
            <div className={ `${styles.heroProfileImage} ${portfolioStyles.imageContainer}` } >
              <Image
                src={ dataItem.image }
                alt={ dataItem.description }
                // fill
                width={ 850 }
                height={ 500 }
                style={ { boxShadow: '10px 10px 10px gray' } }
              />
            </div>
            <div className={ `${portfolioStyles.textContainer}` }>
              <h3>{ dataItem.name }</h3>
              <p>{ dataItem.description }</p>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}
