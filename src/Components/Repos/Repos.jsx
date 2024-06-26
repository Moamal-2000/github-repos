import { useEffect } from "react";
import { staticReposData } from "src/Data/staticReposData";
import { MY_REPOS_URL } from "src/Data/variables";
import { removeDuplicatesByProperty } from "src/Functions/helper";
import useAsync from "src/Hooks/useAsync";
import useOnlineStatus from "src/Hooks/useOnlineStatus";
import Project from "./Project";
import u from "./UtilityClasses.module.scss";

const Repos = () => {
  const isWebsiteOnline = useOnlineStatus();
  const [reposData, setReposData, , isLoading] = useAsync(MY_REPOS_URL, {}, [
    isWebsiteOnline,
  ]);

  function updateReposData() {
    const mergedReposData = reposData.concat(staticReposData);
    const uniqueReposData = removeDuplicatesByProperty(mergedReposData, "name");
    setReposData(uniqueReposData);
  }

  useEffect(() => {
    updateReposData();
  }, [isWebsiteOnline]);

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      <div className={u.repos}>
        {reposData?.map((obj) => (
          <Project data={obj} key={obj.id} />
        ))}
      </div>
    </>
  );
};

export default Repos;
