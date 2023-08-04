import useApiData from "./Hooks/useFetch";
import Project from "./Project";
import styles from "./Repos.module.css";

const Repos = () => {
  // const userData = useApiData("https://api.github.com/users/Moamal-2000")
  const reposData = useApiData("https://api.github.com/users/Moamal-2000/repos");

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


// Get img website from github => https://github.com/Moamal-2000/{name-repo}/tree/main/website,png
