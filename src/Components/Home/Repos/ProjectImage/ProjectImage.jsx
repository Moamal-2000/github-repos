import { getWebsiteImage } from "src/Functions/helper";
import placeHolderImg from "src/Images/placeholder-img.webp";
import s from "./ProjectImage.module.scss";

const ProjectImage = ({ repoName }) => {
  const websiteImgUrl = getWebsiteImage(repoName);

  return (
    <div className={s.placeHolderImg}>
      <img
        src={websiteImgUrl}
        onError={(e) => (e.target.src = placeHolderImg)}
        alt={repoName}
      />
    </div>
  );
};
export default ProjectImage;
