let iterator = 0;

export default (prefix = 'id') => {
  iterator += 1;
  console.log(iterator);
  return `${prefix}-${iterator}`;
};
