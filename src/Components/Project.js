import { useState } from "react";
import PreviewImage from "./PreviewImage";
import styles from "./_Project.module.scss";

const Project = ({ data }) => {
  let { homepage, html_url, name, create_at, description } = data;
  const userName = data.owner.login;
  const websiteImgUrl = `https://raw.githubusercontent.com/${userName}/${name}/main/website.png`;
  const ignoredWebsitesNames = [
    "CV",
    "film-line-app",
    "images",
    "interactive-comments",
    "messenger-webpage",
    "multiple-sidebars",
  ];
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [srcImg, setSrcImg] = useState("");

  if (ignoredWebsitesNames.includes(name)) return null;

  if (!homepage) {
    const liveLink = description.split(" ")[1];
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
      <div className={styles.project}>
        <div className={styles.img} onClick={(e) => handleClickImg(e)}>
          <img
            src={websiteImgUrl}
            onError={(e) =>
              (e.target.src = require("./images/placeholder-img.png"))
            }
            alt="Website"
            title={create_at}
            decoding="async"
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
