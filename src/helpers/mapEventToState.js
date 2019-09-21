export default function (event, property) {
  const { name, value } = event.target;
  const newState = { ...this.state };
  newState[name][property] = value;
  this.setState(newState);
}
