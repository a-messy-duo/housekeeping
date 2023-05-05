
export const delCharInStrCost = (cost: string) => {
  return cost.replace(/[^0-9.]/g, '')
  .replace(/(\..*)\./g, '$1');
}

export const addCommaInNumCost = (cost: number) => {
  return cost.toLocaleString('ko-KR');
};
