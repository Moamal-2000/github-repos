import { useEffect } from "react";
import { useGlobalContext } from "src/Context/GlobalContext";
import useGetResizeWindow from "../../Hooks/useGetResizeWindow";
import s from "./PreviewImage.module.scss";

const PreviewImage = () => {
  const { setIsPreviewActive, isPreviewActive, previewImg } =
    useGlobalContext();
  const { windowWidth } = useGetResizeWindow();
  const isLaptopWindow = windowWidth >= 1200;
  const activeClass = isPreviewActive ? s.active : "";

  function closeOverlay() {
    setIsPreviewActive(false);
  }

  function toggleScrollBar() {
    document.body.style.overflow = isPreviewActive ? "hidden" : "";
  }

  function handleResizeWindow() {
    if (isLaptopWindow) closeOverlay();
    else document.body.style.overflow = "";
  }

  useEffect(() => toggleScrollBar(), [isPreviewActive]);
  useEffect(() => handleResizeWindow(), [windowWidth]);

  return (
    <div className={`${s.imgHolder} ${activeClass}`} onClick={closeOverlay}>
      <img src={previewImg} alt="preview website" decoding="async" />
    </div>
  );
};

export default PreviewImage;
