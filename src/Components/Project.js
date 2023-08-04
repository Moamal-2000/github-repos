import styles from "./Project.module.css";

const Project = ({ data }) => {
  const { homepage, html_url, name, create_at } = data;
  const userName = data.owner.login;
  const websiteImgUrl = `https://raw.githubusercontent.com/${userName}/${name}/main/website.png`;

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
        <h2>{name}</h2>
        <div className={styles.buttons}>
          <button type="button">
            <a href={homepage} target="_blank" rel="noreferrer">
              Live
            </a>
          </button>
          <button type="button">
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
