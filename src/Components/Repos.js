import { staticReposData } from "./Data/staticReposData";
import useFetch from "./Hooks/useFetch";
import Project from "./Project";
import styles from "./_Repos.module.scss";

const Repos = () => {
  let reposData = useFetch("https://api.github.com/users/Moamal-2000/repos");

  if (reposData) {
    reposData = reposData.concat(staticReposData)
    console.log(reposData);
  }

  return (
    <div className="container">
      <div className={styles.repos}>
        {reposData &&
          reposData.map((obj) => <Project data={obj} key={obj.id} />)}
      </div>
    </div>
  );
};

export default Repos;
