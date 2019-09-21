export default function (event) {
  const { name, value } = event.target;
  const newState = { ...this.state };
  newState[name].value = value;
  this.setState(newState);
}
