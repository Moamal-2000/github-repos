import { useGlobalContext } from "src/Context/GlobalContext";
import s from "./PreviewImage.module.scss";

const PreviewImage = () => {
  const { setIsPreviewActive, isPreviewActive, previewImg } =
    useGlobalContext();
  const activeClass = isPreviewActive ? s.active : "";

  function closeOverlay() {
    setIsPreviewActive(false);
  }

  return (
    <div className={`${s.imgHolder} ${activeClass}`} onClick={closeOverlay}>
      <img src={previewImg} alt="preview website" decoding="async" />
    </div>
  );
};

export default PreviewImage;
