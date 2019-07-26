export default function (e) {
  const textInput = e.target.value;
  if (textInput.indexOf('@') !== -1) {
    return false;
  }
  return 'Please enter the corrent email address';
}
