import useFetchDataFrom from "../Hooks/useFetchDataFrom";
import { staticReposData } from "./Data/staticReposData";
import Project from "./Project";
import utility from "./_UtilityClasses.module.scss";

const Repos = () => {
  let reposData = useFetchDataFrom("https://api.github.com/users/Moamal-2000/repos");

  if (reposData) reposData = [...reposData, ...staticReposData];

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
