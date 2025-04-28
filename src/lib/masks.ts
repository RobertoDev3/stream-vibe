export function maskTwoDigits(value: string) {
  if (!value) return value;
  const onlyNumber = value.replace(/[^\d]+/g, '');

  if (onlyNumber.length === 1) {
    return `0${onlyNumber}`;
  }

  return onlyNumber;
}
