import { useGlobalContext } from "../../Context/GlobalContext";
import s from "./PreviewImage.module.scss";

const PreviewImage = () => {
  const { setIsPreviewActive, isPreviewActive, previewImg } =
    useGlobalContext();
  const activeClass = isPreviewActive ? s.active : "";

  function closeOverlay() {
    setIsPreviewActive(false);
  }

  return (
    <div className={`${s.overlay} ${activeClass}`} onClick={closeOverlay}>
      <div className={s.imgHolder}>
        <img src={previewImg} alt="preview website" decoding="async" />
      </div>
    </div>
  );
};

export default PreviewImage;
