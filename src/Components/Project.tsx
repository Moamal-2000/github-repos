import { useState } from "react";
import { ProjectTypes } from "../Types/modelTypes";
import PreviewImage from "./PreviewImage";
import styles from "./_Project.module.scss";
import utility from "./_UtilityClasses.module.scss";
import placeholderUrlImg from "../images/placeholder-img.png"

const Project: React.FC<ProjectTypes> = ({
  data: { homepage, html_url, name, description },
}) => {
  const userName: string = "Moamal-2000";
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const websiteImgUrl = `https://raw.githubusercontent.com/${userName}/${name}/main/website.webp`;
  const ignoredWebsitesNames = [
    "CV",
    "film-line-app",
    "images",
    "interactive-comments",
    "messenger-webpage",
    "multiple-sidebars",
    "github-repo",
  ];

  if (ignoredWebsitesNames.includes(name)) return null;

  if (!homepage) {
    const liveLink = description?.split(" ")[1];
    homepage = liveLink;
  }

  function disableLink(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!homepage) e.preventDefault();
  }

  function handleClickImg(e: React.MouseEvent<HTMLImageElement>) {
    setIsOverlayActive(true);
    setSrcImg(e.currentTarget.src);
  }

  return (
    <>
      <PreviewImage
        src={srcImg}
        isOverlayActive={isOverlayActive}
        setIsOverlayActive={setIsOverlayActive}
      />

      <div className={`${utility.project} ${styles.project}`}>
        <div className={styles.img}>
          <img
            src={websiteImgUrl}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) =>
              (e.currentTarget.src = placeholderUrlImg)
            }
            onClick={(e) => handleClickImg(e)}
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
