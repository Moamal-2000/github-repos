import { IGNORED_WEBSITES_NAMES } from "src/Data/variables";
import s from "./Project.module.scss";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";
import u from "./UtilityClasses.module.scss";

const Project = ({ data }) => {
  const isInBlackList = IGNORED_WEBSITES_NAMES.includes(data.name);

  if (isInBlackList) return null;

  return (
    <div className={`${u.project} ${s.project}`} tabIndex="0">
      <ProjectImage repoName={data.name} />
      <ProjectContent data={data} />
    </div>
  );
};

export default Project;
