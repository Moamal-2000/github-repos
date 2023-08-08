import styles from "./_Project.module.scss";

const Project = ({ data }) => {
  const { homepage, html_url, name, create_at } = data;
  const userName = data.owner.login;
  const websiteImgUrl = `https://raw.githubusercontent.com/${userName}/${name}/main/website.png`;
  const ignoredWebsitesNames = [
    "CV",
    "film-line-app",
    "images",
    "interactive-comments",
    "messenger-webpage",
    "multiple-sidebars",
  ];

  if (ignoredWebsitesNames.includes(name)) return null;

  function disableLink(e) {
    if (!homepage) e.preventDefault();
  }

  return (
    <div className={styles.project}>
      <div className={styles.img}>
        <img
          src={websiteImgUrl}
          onError={(e) =>
            (e.target.src = require("./images/placeholder-img.png"))
          }
          alt="Website"
          title={create_at}
        />
      </div>

      <div className={styles.content}>
        <a
          href={homepage}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => disableLink(e)}
        >
          <h2>{name}</h2>
        </a>
        <div className={styles.buttons}>
          <button
            className={`${styles.liveButton} ${
              !homepage ? styles.disabled : ""
            }`}
            type="button"
          >
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => disableLink(e)}
            >
              Live
            </a>
          </button>
          <button className={styles.repoButton} type="button">
            <a href={html_url} target="_blank" rel="noreferrer">
              Repo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
