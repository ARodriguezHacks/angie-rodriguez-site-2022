import { useState, useEffect } from 'react';
import Image from "next/image";
import profilePic from "../../public/images/AngieR_profile_min_2.png";
import styles from "../../styles/Home.module.scss";
import githubStyles from "./styles.module.scss"

export default function Github() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    async function getData() {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_GITHUB_URL}`, {
        headers: {
          "accept": "application/vnd.github+json",
        },
      }
      );
      const res = await data.json();
      setData(res);
    }
    setLoading(false)
    getData()
  }, [])

  if (isLoading && !data) return <p>Loading...</p>
  if (!isLoading && !data) return <p>No profile data</p>

  return (
    <div className={ `sectionFlex sectionHeight sectionMargin ${githubStyles.github}` } id="github">
      <div>
        <h2 className={ `headingOne`}>
          Check out my latest Github Works
        </h2>
        <div className={ ` ${githubStyles.githubFlexContainer} ${githubStyles.container}` }>
          { data.map(dataItem => (
            <div key={ dataItem.id } className={ githubStyles.githubProject }>
              <div className={ githubStyles.heroProfileImage }>
                <Image
                  src={ profilePic }
                  alt="Angie Rodriguez profile pic"
                  width={ 250 }
                  height={ 250 }
                  style={ { boxShadow: '10px 10px 10px gray' } }
                />
              </div>
              <div className={ githubStyles.content }>
                <h3>{ dataItem.name }</h3>
                <p>{ dataItem.description }</p>
              </div>
            </div>
          )) }
        </div>
      </div>
    </div>
  );
}
