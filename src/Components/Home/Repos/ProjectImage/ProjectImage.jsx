import { getWebsiteImage } from "src/Functions/helper";
import placeHolderImg from "src/Images/placeholder-img.webp";
import s from "./ProjectImage.module.scss";

const ProjectImage = ({ repoName, websiteLink }) => {
  const websiteImgUrl = getWebsiteImage(repoName);

  return (
    <a
      href={websiteLink}
      target="_blank"
      rel="noreferrer"
      className={s.placeHolderImg}
    >
      <img
        src={websiteImgUrl}
        onError={(e) => (e.target.src = placeHolderImg)}
        alt={repoName}
      />
    </a>
  );
};
export default ProjectImage;
