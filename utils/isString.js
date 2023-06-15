export default function isString(str) {
  try {
    return typeof str === "String";
  } catch (e) {
    return false;
  }
}
