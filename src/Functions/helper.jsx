import { GENERAL_LINKS, MY_GITHUB_NAME } from "../Data/variables";

export function removeDuplicatesByProperty(array, property) {
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

export function getWebsiteImage(repoName) {
  return `${GENERAL_LINKS.githubContentLink}/${MY_GITHUB_NAME}/${repoName}/main/website.webp`;
}
