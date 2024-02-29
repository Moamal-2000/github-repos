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