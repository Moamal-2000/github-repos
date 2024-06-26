import { useGlobalContext } from "../../Context/GlobalContext";
import s from "./PreviewImage.module.scss";

const PreviewImage = () => {
  const { setIsOverlayActive, isOverlayActive, previewImg } =
    useGlobalContext();
  const activeClass = isOverlayActive ? s.active : "";

  function closeOverlay() {
    setIsOverlayActive(false);
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
