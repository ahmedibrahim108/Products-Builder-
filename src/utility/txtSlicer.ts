/**
 * Truncates a string to a specified length and appends an ellipsis if it exceeds the limit.
 * * @param {string} txt - The input string to be sliced.
 * @param {number} [max=50] - The maximum character length before truncation. Defaults to 50.
 * @returns {string} The original string, or a truncated version with " ..." appended.
 */

export function textSlicer(txt: string, max: number = 50) {
  if (txt.length > max) {
    return `${txt.slice(0, max)} ...`;
  } else return txt;
}
