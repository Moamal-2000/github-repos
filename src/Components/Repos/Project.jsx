import { useState } from "react";
import PreviewImage from "./PreviewImage";
import styles from "./Project.module.scss";
import utility from "./UtilityClasses.module.scss";
import placeHolderImg from "../../Images/placeholder-img.png"

const Project = ({ data }) => {
  let { homepage, html_url, name, description } = data;
  let userName = "Moamal-2000";
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const websiteImgUrl = `https://raw.githubusercontent.com/${userName}/${name}/main/website.webp`;
  const ignoredWebsitesNames = [
    "images",
    "github-repo",
    "zcode",
    "testing-react3"
  ];

  if (ignoredWebsitesNames.includes(name)) return null;

  if (!homepage) {
    const liveLink = description?.split(" ")[1];
    homepage = liveLink;
  }

  function disableLink(e) {
    if (!homepage) e.preventDefault();
  }

  function handleClickImg(e) {
    setIsOverlayActive(true);
    setSrcImg(e.target.src);
  }

  return (
    <>
      <PreviewImage
        src={srcImg}
        isOverlayActive={isOverlayActive}
        setIsOverlayActive={setIsOverlayActive}
      />

      <div className={`${utility.project} ${styles.project}`}>
        <div className={styles.img} onClick={(e) => handleClickImg(e)}>
          <img
            src={websiteImgUrl}
            onError={(e) =>
              (e.target.src = placeHolderImg)
            }
            alt="Website"
          />
        </div>

        <div className={styles.content}>
          <a
            href={homepage}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => disableLink(e)}
          >
            <h2>{name}</h2>
          </a>
          <div className={styles.buttons}>
            <button
              className={`${styles.liveButton} ${
                !homepage ? styles.disabled : ""
              }`}
              type="button"
            >
              <a
                href={homepage}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => disableLink(e)}
              >
                Live
              </a>
            </button>
            <button className={styles.repoButton} type="button">
              <a href={html_url} target="_blank" rel="noreferrer">
                Repo
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
