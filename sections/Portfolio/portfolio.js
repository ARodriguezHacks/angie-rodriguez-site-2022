import Image from "next/image";
import portfolioStyles from "./styles.module.scss";
import projectData from "../../data/projects.json"

export default function Portfolio() {
  return (
    <div className={ `sectionFlex sectionHeight ${portfolioStyles.portfolio} sectionMargin` } id="portfolio">
      <div>
        <h2 className={ `headingOne` }>My Favorite Projects</h2>
        { projectData.map(dataItem => (
          <div key={ dataItem.name } className={ `${portfolioStyles.sectionPortfolioFlex} ${portfolioStyles.sectionProjectHeight}` }>
            <div className={ `${portfolioStyles.portfolioCopy}` }>
              <h3>{ dataItem.name }</h3>
              <p>{ dataItem.description }</p>
              <a href={ dataItem.githubURL }>View Github Repo</a>
            </div>
            <div className={ ` ${portfolioStyles.imageContainer}` } >
              <a href={ dataItem.demoURL } target="_blank" title="Go to live demo">
                <Image
                  src={ dataItem.image }
                  alt={ dataItem.description }
                  width={ 300 }
                  height={ 300 }
                  sizes="200vw"
                  style={ {
                    boxShadow: '10px 10px 10px gray',
                    width: '100%',
                    height: 'auto',
                  } }
                />
              </a>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}
