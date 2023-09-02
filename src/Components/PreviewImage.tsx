import styles from "./_PreviewImage.module.scss";

type props = {
  src: string;
  isOverlayActive: boolean,
  setIsOverlayActive: React.Dispatch<React.SetStateAction<boolean>>
}

const PreviewImage = ({ src, isOverlayActive, setIsOverlayActive }: props) => {
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
