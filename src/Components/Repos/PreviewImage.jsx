import styles from "./PreviewImage.module.scss";

const PreviewImage = ({ src, isOverlayActive, setIsOverlayActive }) => {
  const activeClass = isOverlayActive ? styles.active : "";

  return (
    <div
      className={`${styles.overlay} ${activeClass}`}
      onClick={() => setIsOverlayActive(false)}
    >
      <div className={styles.imgHolder}>
        <img src={src} alt="preview website" />
      </div>
    </div>
  );
};

export default PreviewImage;
