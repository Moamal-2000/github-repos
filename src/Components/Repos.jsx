import { staticReposData } from "../Data/staticReposData";
import useFetchDataFrom from "../Hooks/useFetchDataFrom";
import Project from "./Project";
import utility from "./_UtilityClasses.module.scss";

const Repos = () => {
  let reposData = useFetchDataFrom(
    "https://api.github.com/users/Moamal-2000/repos"
  );

  function removeDuplicatesByProperty(array, property) {
    const seen = new Set();

    const uniqueObjects = array.filter((item) => {
      if (!seen.has(item[property])) {
        seen.add(item[property]);
        return true;
      }
      return false;
    });

    return uniqueObjects;
  }

  if (reposData) {
    reposData = [...[...reposData, ...staticReposData]];
    const uniqueArray = removeDuplicatesByProperty(reposData, "name");
    reposData = uniqueArray;
  }

  return (
    <div className="container">
      <div className={utility.repos}>
        {reposData &&
          reposData.map((obj) => <Project data={obj} key={obj.id} />)}
      </div>
    </div>
  );
};

export default Repos;
