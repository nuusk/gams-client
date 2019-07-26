export default function (e) {
  const textInput = e.target.value;
  if (textInput.indexOf('@') !== -1) {
    return true;
  }
  return false;
}
