import { useState } from "react";
import placeHolderImg from "../../Images/placeholder-img.png";
import PreviewImage from "./PreviewImage";
import styles from "./Project.module.scss";
import utility from "./UtilityClasses.module.scss";

const Project = ({ data }) => {
  let { homepage, html_url, name, description } = data;
  const USERNAME = "Moamal-2000";
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const websiteImgUrl = `https://raw.githubusercontent.com/${USERNAME}/${name}/main/website.webp`;
  const ignoredWebsitesNames = [
    "images",
    "github-repos",
    "zcode",
    "testing-react3",
    "learning-pwa"
  ];

  if (ignoredWebsitesNames.includes(name)) return null;

  if (!homepage) {
    const liveLink = description?.split(" ")[1];
    homepage = liveLink;
  }

  function handleClickImg(e) {
    setIsOverlayActive(true);
    setSrcImg(e.target.src);
  }

  function disableLink(e) {
    if (!homepage) e.preventDefault();
  }

  function setLoadingImgState() {
    const isImgUrlContainsLCP = websiteImgUrl.includes("age-calculator-app");
    return isImgUrlContainsLCP ? "eager" : "lazy";
  }

  return (
    <>
      <PreviewImage
        src={srcImg}
        isOverlayActive={isOverlayActive}
        setIsOverlayActive={setIsOverlayActive}
      />

      <div className={`${utility.project} ${styles.project}`} tabIndex="0">
        <div
          className={styles.placeHolderImg}
          onClick={(e) => handleClickImg(e)}
        >
          <img
            src={websiteImgUrl}
            onError={(e) => (e.target.src = placeHolderImg)}
            alt="Website image"
            decoding="async"
            loading={setLoadingImgState()}
          />
        </div>

        <div className={styles.content}>
          <a
            href={homepage}
            target="_blank"
            rel="noreferrer"
            className={styles.websiteName}
            onClick={(e) => disableLink(e)}
          >
            {name}
          </a>

          <div className={styles.buttons}>
            <a
              onClick={(e) => disableLink(e)}
              className={`${styles.liveButton} ${
                !homepage ? styles.disabled : ""
              }`}
              href={homepage}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>

            <a
              className={styles.repoButton}
              href={html_url}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
