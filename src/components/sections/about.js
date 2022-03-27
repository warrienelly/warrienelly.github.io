import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Programming Language: Python, Javascript, PostgresSql', 'Machine Learning: NLP, Computer Vision, Tensorflow, MLOPs', 'Development: Git, Docker, RestAPI, Django, Kubernetes, Spark, Elasticsearch', 'Data Analytics: Tableau, Webscrapping, PostgreSql, ETL, Google Sheet, Pandas', 'GIS: Google Earth Engine, Rasterio, QGIS, Mapbox, STAC', 'Cloud Computing: AWS, GCP, Big Query'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
            My name is Warrie, I'm a Data scientist building data-driven product for healthcare and 
            retail business industry. My interest lies in machine learning, geospatial data technologies, data visualisation
            &amp; software design/development in solving challenging social good problems.
            </p>

            <p>
            I currently work as a geospatial data scientist at <a href="https://www.datasciencenigeria.org/">Data Scientists Network, DSN</a> {' '}
            where I collate data from crowdsourced 
            community and mined warehouse, design and maintain data from multiple platform using Artificial intelligence to 
            drive expansion opportunities in retail and healthcare industry. In addition to working as a product owner for {' '}
             <a href="https://play.google.com/store/apps/details?id=com.app.spoton">SpotOn</a>.
            
            </p>

            {/* <p>
              Fast-forward to today, and I’ve had the privilege of working at{' '}
              <a href="https://us.mullenlowe.com/">an advertising agency</a>,{' '}
              <a href="https://starry.com/">a start-up</a>,{' '}
              <a href="https://www.apple.com/">a huge corporation</a>, and{' '}
              <a href="https://scout.camd.northeastern.edu/">a student-led design studio</a>. My
              main focus these days is building accessible, inclusive products and digital
              experiences at <a href="https://upstatement.com/">Upstatement</a> for a variety of
              clients.
            </p> */}
            
            <p> Pirior to DSN, I worked as an AI research engineer in <a href="https://africa4ai.com/">Afric4AI </a>, building machine learning
             algorithm and visualizations for social good use case using GIS, Computer vision and NLP technology. 
            <p>
              In the past I have had experience working as a machine learning engineer in building a startup . 
              Yes, have had my own fairshare of wearing many hats and learning from my iterative failure; which was after my computer engineering degree program in 2018.
            </p>
            <p>
            
            Outside work I engage in the ML Africa community on  <a href="https://zindi.africa/users/Georie/competitions/certificate"> Zindi </a>; as well as {' '}
            <a href="https://medium.com/@warrie.warrieus"> journaling </a>,{' '}
            <a href="https://public.tableau.com/app/profile/warrie.warrie#!/?newProfile=&activeTab=0">visualizing</a>,{' '}
            <a href="https://www.google.com/maps/contrib/114499429832231103945/contribute/@6.536725,3.3005652,12z/data=!3m1!4b1!4m3!8m2!3m1!1e1">localguiding</a>, &amp; {' '} 
            <a href="https://www.youtube.com/channel/UCl7dVKHRWSItPDhXMv0E9lg">youTubing</a>.
             I also share beautiful spatial
             visualzation in <a href=" https://www.linkedin.com/in/warrie-usenobong/recent-activity/shares/">Linkedin</a>.
            
            </p>
            <p>
            Funfact: In 2016, I won a <a href="https://web.facebook.com/thegreeksinafrica/photos/a.1527727327522935/1550743455221322">Number Marathon</a> reciting 500 digits of 𝛑.
            </p>
            



            </p>

            {/* <p>
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app">
                launched a course
              </a>{' '}
              that covers everything you need to build a web app with the Spotify API using Node
              &amp; React.
            </p> */}

            <p>Here are a few technologies I’ve worked with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
