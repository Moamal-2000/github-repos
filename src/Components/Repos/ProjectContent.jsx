import s from "./ProjectContent.module.scss";

const ProjectContent = ({ data }) => {
  let { homepage, name: repoName, html_url, description } = data;

  if (!homepage) {
    const liveLink = description?.split(" ")[1];
    homepage = liveLink;
  }

  function disableLink(e) {
    if (!homepage) e.preventDefault();
  }

  return (
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
  );
};
export default ProjectContent;
