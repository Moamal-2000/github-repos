import { useState } from "react";
import { IGNORED_WEBSITES_NAMES, MY_GITHUB_NAME } from "src/Data/variables";
import placeHolderImg from "src/Images/placeholder-img.webp";
import PreviewImage from "./PreviewImage";
import s from "./Project.module.scss";
import u from "./UtilityClasses.module.scss";

const Project = ({ data }) => {
  let { homepage, html_url, name: repoName, description } = data;
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const baseUrl = "https://raw.githubusercontent.com";
  const websiteImgUrl = `${baseUrl}/${MY_GITHUB_NAME}/${repoName}/main/website.webp`;

  if (IGNORED_WEBSITES_NAMES.includes(repoName)) return null;

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

      <div className={`${u.project} ${s.project}`} tabIndex="0">
        <div className={s.placeHolderImg} onClick={(e) => handleClickImg(e)}>
          <img
            src={websiteImgUrl}
            onError={(e) => (e.target.src = placeHolderImg)}
            alt={repoName}
            decoding="async"
            loading={setLoadingImgState()}
          />
        </div>

        <div className={s.content}>
          <a
            href={homepage}
            target="_blank"
            rel="noreferrer"
            className={s.websiteName}
            onClick={(e) => disableLink(e)}
          >
            {repoName}
          </a>

          <div className={s.buttons}>
            <a
              onClick={(e) => disableLink(e)}
              className={`${s.liveButton} ${!homepage ? s.disabled : ""}`}
              href={homepage}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>

            <a
              className={s.repoButton}
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
