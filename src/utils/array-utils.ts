export const toArray = <T>(t: undefined | T | T[]): T[] => {
  if (t === undefined) {
    return [];
  }
  return Array.isArray(t) ? t : [t];
};
