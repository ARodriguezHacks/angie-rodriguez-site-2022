import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import portfolioStyles from "./styles.module.scss";
import projectData from "../../data/projects.json"

export default function Portfolio() {
  return (
    <div className={ `sectionFlex sectionHeight ${portfolioStyles.portfolio} sectionMargin` } id="portfolio">
      <div>
        <h2 className={ `headingOne` }>My Favorite Projects</h2>
        { projectData.map(dataItem => (
          <div key={ dataItem.name } className={ `${portfolioStyles.sectionPortfolioFlex}` } style={ { minHeight: "100vh" } }>
            <div className={ `${styles.heroProfileImage} ${portfolioStyles.imageContainer}` } >
              <Image
                src={ dataItem.image }
                alt={ dataItem.description }
                width={ 300 }
                height={ 300 }
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
