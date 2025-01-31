import ArtImg from "../images/Art.png";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { AnimatedSection } from "./AnimatedSection";
export const Art = () => {
  const getFadeTopStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateY(40px)",
  });
  const getFadeRightStyles = (isFadeLeftInViewPort) => ({
    transition: "all 1.8s ease-in",
    opacity: isFadeLeftInViewPort ? "1" : "0",
    transform: isFadeLeftInViewPort ? "" : "translateX(-100%)",
  });
  return (
    <div className="Art">
      <div getStyles={getFadeRightStyles}>
        <div className="topTitle">
          <div id="line1"></div>
          <div>
            <div className="text">
              <span className="title title1">
                WE ARE
                <span className="title title2"> HUNGRI </span> GAMES
              </span>
            </div>
          </div>

          <div id="line2"></div>
        </div>
      </div>

      <div className="bottomImg">
        <div className="rightText">
          <div getStyles={getFadeTopStyles}>
            <div>
              <span className="type2 lgText">
                <span className="type1 lgText">MUNITY</span> Studios specializes
                in creating high-quality 3D art and animations.
              </span>
            </div>
          </div>
          <div getStyles={getFadeTopStyles}>
            <div>
              <span className="type3">
                Since 2019, our seasoned team with 25+ years of management
                experience has been at the forefront of EMEA and Asia gaming.
                With our motto, "Feed Your Gaming Soul," we're your gateway to
                the immersive world of web3 gaming.
              </span>
            </div>
          </div>
          <div getStyles={getFadeTopStyles}>
            <div>
              <div className="bottomBtn">
                Visit Hungri Games
                <span>
                  <i className="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div getStyles={getFadeRightStyles}>
          <div
            className="daoImg"
            style={{
              backgroundImage: `url(${ArtImg})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
