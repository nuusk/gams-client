const ERROR_MESSAGE = 'use at least 4 letters';

export default function (e) {
  const textInput = e.target.value;
  if (textInput.length < 4) return ERROR_MESSAGE;
  return '';
}
