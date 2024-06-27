import { useGlobalContext } from "src/Context/GlobalContext";
import { getWebsiteImage } from "src/Functions/helper";
import useGetResizeWindow from "src/Hooks/useGetResizeWindow";
import placeHolderImg from "src/Images/placeholder-img.webp";
import s from "./ProjectImage.module.scss";

const ProjectImage = ({ repoName }) => {
  const { setIsPreviewActive, setPreviewImg } = useGlobalContext();
  const websiteImgUrl = getWebsiteImage(repoName);
  const { windowWidth } = useGetResizeWindow();
  const isLaptopWindow = windowWidth >= 1200;

  function handleClickImg(e) {
    const imgSrc = e.currentTarget.src;
    if (!isLaptopWindow || !imgSrc) return;

    setIsPreviewActive(true);
    setPreviewImg(imgSrc);
  }

  return (
    <div className={s.placeHolderImg} onClick={(e) => handleClickImg(e)}>
      <img
        src={websiteImgUrl}
        onError={(e) => (e.target.src = placeHolderImg)}
        alt={repoName}
        decoding="async"
        loading={setLoadingImgState(websiteImgUrl)}
      />
    </div>
  );
};
export default ProjectImage;

function setLoadingImgState(websiteImgUrl) {
  const isImgUrlContainsLCP = websiteImgUrl.includes("age-calculator-app");
  return isImgUrlContainsLCP ? "eager" : "lazy";
}
