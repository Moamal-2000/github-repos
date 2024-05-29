import s from "./PreviewImage.module.scss";

const PreviewImage = ({ src, isOverlayActive, setIsOverlayActive }) => {
  const activeClass = isOverlayActive ? s.active : "";

  return (
    <div
      className={`${s.overlay} ${activeClass}`}
      onClick={() => setIsOverlayActive(false)}
    >
      <div className={s.imgHolder}>
        <img src={src} alt="preview website" decoding="async" />
      </div>
    </div>
  );
};

export default PreviewImage;
