import { useState } from "react";
import { projects } from "../Types/app";
import PreviewImage from "../components/PreviewImage";
import styles from "./_Project.module.scss";
import utility from "./_UtilityClasses.module.scss";

const Project = ({ data }: projects) => {
  const { html_url, name, description } = data;
  let { homepage } = data;
  const userName: string = "Moamal-2000";
  const [isOverlayActive, setIsOverlayActive] = useState<boolean>(false);
  const [srcImg, setSrcImg] = useState<string>("");
  const websiteImgUrl: string = `https://raw.githubusercontent.com/${userName}/${name}/main/website.webp`;
  const ignoredWebsitesNames: string[] = [
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
            onClick={(e: React.MouseEvent<HTMLImageElement>) => handleClickImg(e)}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) =>
              (e.currentTarget.src = require("../images/placeholder-img.png"))
            }
            alt="Website"
          />
        </div>

        <div className={styles.content}>
          <a
            href={homepage}
            target="_blank"
            rel="noreferrer"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => disableLink(e)}
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
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                  disableLink(e)
                }
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
