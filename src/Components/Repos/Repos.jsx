import { useEffect } from "react";
import { staticReposData } from "../../Data/staticReposData";
import { MY_REPOS_URL } from "../../Data/variables";
import { removeDuplicatesByProperty } from "../../Functions/helper";
import useAsync from "../../Hooks/useAsync";
import useOnlineStatus from "../../Hooks/useOnlineStatus";
import Project from "./Project";
import utility from "./UtilityClasses.module.scss";

const Repos = () => {
  const isWebsiteOnline = useOnlineStatus();
  const [reposData, setReposData, _, isLoading] = useAsync(MY_REPOS_URL, {}, [
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
      <div className={utility.repos}>
        {reposData?.map((obj) => (
          <Project data={obj} key={obj.id} />
        ))}
      </div>
    </>
  );
};

export default Repos;
