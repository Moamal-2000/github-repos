import { IGNORED_WEBSITES_NAMES } from "src/Data/variables";
import PreviewImage from "./PreviewImage";
import s from "./Project.module.scss";
import ProjectImage from "./ProjectImage";
import u from "./UtilityClasses.module.scss";

const Project = ({ data }) => {
  let { homepage, html_url, name: repoName, description } = data;

  if (IGNORED_WEBSITES_NAMES.includes(repoName)) return null;

  if (!homepage) {
    const liveLink = description?.split(" ")[1];
    homepage = liveLink;
  }

  function disableLink(e) {
    if (!homepage) e.preventDefault();
  }

  return (
    <>
      <PreviewImage
        src={srcImg}
        isOverlayActive={isOverlayActive}
        setIsOverlayActive={setIsOverlayActive}
      />

      <div className={`${u.project} ${s.project}`} tabIndex="0">
        <ProjectImage repoName={repoName} />

        <div className={s.content}>
          <a
            href={homepage}
            target="_blank"
            rel="noreferrer"
            className={s.websiteName}
            onClick={(e) => disableLink(e)}
          >
            {repoName}
          </a>

          <div className={s.buttons}>
            <a
              onClick={(e) => disableLink(e)}
              className={`${s.liveButton} ${!homepage ? s.disabled : ""}`}
              href={homepage}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>

            <a
              className={s.repoButton}
              href={html_url}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
