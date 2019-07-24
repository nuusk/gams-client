let iterator = 0;

export default (prefix = 'id') => {
  iterator += 1;
  return `${prefix}-${iterator}`;
};
