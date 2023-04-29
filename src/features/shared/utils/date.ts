export const padToDigits = (num: number, digits = 2) => {
  return num.toString().padStart(digits, '0');
};

export const formatDate = (dateObject: Date) => {
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const date = dateObject.getDate();

  return `${year}. ${padToDigits(month)}. ${padToDigits(date)}`;
};
