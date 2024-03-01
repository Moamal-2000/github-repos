import { useEffect } from "react";
import { staticReposData } from "../../Data/staticReposData";
import { removeDuplicatesByProperty } from "../../Functions/helper";
import useAsync from "../../Hooks/useAsync";
import Project from "./Project";
import utility from "./UtilityClasses.module.scss";
import useOnlineStatus from "../../Hooks/useOnlineStatus";

const MY_REPOS_API = "https://api.github.com/users/Moamal-2000/repos";

const Repos = () => {
  const isWebsiteOnline = useOnlineStatus()
  const [reposData, setReposData, _, isLoading] = useAsync(MY_REPOS_API, {}, [isWebsiteOnline]);

  function updateReposData() {
    const mergedReposData = [...reposData, ...staticReposData];
    const uniqueReposData = removeDuplicatesByProperty(mergedReposData, "name");
    setReposData(uniqueReposData);
  }

  useEffect(() => {
    updateReposData();
  }, [isWebsiteOnline]);

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      <div className={utility.repos}>
        {reposData &&
          reposData.map((obj) => <Project data={obj} key={obj.id} />)}
      </div>
    </>
  );
};

export default Repos;
