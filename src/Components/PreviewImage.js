import styles from "./_PreviewImage.module.scss";

const PreviewImage = ({ src, isOverlayActive, setIsOverlayActive }) => {
  return (
    <div
      className={`${styles.overlay} ${isOverlayActive ? styles.active : ""}`}
      onClick={() => setIsOverlayActive(false)}
    >
      <div className={styles.imgHolder}>
        <img src={src} alt="preview" />
      </div>
    </div>
  );
};

export default PreviewImage;
