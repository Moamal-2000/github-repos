import { IGNORED_WEBSITES_NAMES } from "src/Data/variables";
import ProjectContent from "../ProjectContent/ProjectContent";
import ProjectImage from "../ProjectImage/ProjectImage";
import u from "../UtilityClasses.module.scss";
import s from "./ProjectCard.module.scss";

const ProjectCard = ({ data }) => {
  const isInBlackList = IGNORED_WEBSITES_NAMES.includes(data.name);

  if (isInBlackList) return null;

  return (
    <div className={`${u.project} ${s.project}`} tabIndex="0">
      <ProjectImage repoName={data.name} />
      <ProjectContent data={data} />
    </div>
  );
};

export default ProjectCard;
