const WHITE_LIST = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_-';
const ERROR_MESSAGE = 'use only numbers, letters and "-", "_"';

export default function (e) {
  const textInput = e.target.value;
  for (let i = 0; i < textInput.length; i += 1) {
    if (WHITE_LIST.indexOf(textInput[i]) === -1) return ERROR_MESSAGE;
  }
  return false;
}
