// Normally would use Object.groupBy, but in tests getting TypeError: Object.groupBy is not a function

export function groupBy(arr, keyFunc) {
  return arr.reduce(function (groups, item) {
    const key = keyFunc(item);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}
