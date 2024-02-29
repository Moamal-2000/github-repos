import { useEffect } from "react";
import { staticReposData } from "../../Data/staticReposData";
import { removeDuplicatesByProperty } from "../../Functions/helper";
import useAsync from "../../Hooks/useAsync";
import Project from "./Project";
import utility from "./UtilityClasses.module.scss";

const MY_REPOS_API = "https://api.github.com/users/Moamal-2000/repos";

const Repos = () => {
  const [reposData, setReposData, isError, isLoading] = useAsync(MY_REPOS_API);

  useEffect(() => {
    if (!reposData) return;

    const reposDataClone = [...[...reposData, ...staticReposData]];
    const uniqueArray = removeDuplicatesByProperty(reposDataClone, "name");
    setReposData(uniqueArray);
  }, []);

  if (isError) return <p>Error while fetching data.</p>;
  if (isLoading) return <p>Loading ...</p>;

  return (
    <div className={utility.repos}>
      {reposData && reposData.map((obj) => <Project data={obj} key={obj.id} />)}
    </div>
  );
};

export default Repos;
