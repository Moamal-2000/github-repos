import { useState } from "react";
import { getWebsiteImage } from "src/Functions/helper";
import placeHolderImg from "src/Images/placeholder-img.webp";
import s from "./Project.module.scss";

const ProjectImage = ({repoName}) => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const websiteImgUrl = getWebsiteImage(repoName);

  function handleClickImg(e) {
    setIsOverlayActive(true);
    setSrcImg(e.target.src);
  }

  function setLoadingImgState() {
    const isImgUrlContainsLCP = websiteImgUrl.includes("age-calculator-app");
    return isImgUrlContainsLCP ? "eager" : "lazy";
  }

  return (
    <div className={s.placeHolderImg} onClick={(e) => handleClickImg(e)}>
      <img
        src={websiteImgUrl}
        onError={(e) => (e.target.src = placeHolderImg)}
        alt={repoName}
        decoding="async"
        loading={setLoadingImgState()}
      />
    </div>
  );
};
export default ProjectImage;
