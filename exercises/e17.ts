export const minBy = <T>(
  array: T[],
  cb: (el: T) => string | number
): T | undefined => {
  let min = array[0];
  if (min === undefined) return undefined;
  for (let element of array) {
    console.log(cb(element), min);
    if (cb(element) < cb(min)) {
      min = element;
    }
  }
  return min;
};

export function maxBy<T>(
  array: T[],
  cb: (el: T) => string | number
): T | undefined {
  let max = array[0];
  if (max === undefined) return undefined;
  for (let element of array) {
    if (cb(element) > cb(max)) {
      max = element;
    }
  }
  return max;
}
