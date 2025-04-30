export function maskTwoDigits(value: string) {
  if (!value) return value;
  const onlyNumber = value.replace(/[^\d]+/g, '');

  if (onlyNumber.length === 1) {
    return `0${onlyNumber}`;
  }

  return onlyNumber;
}

export function maskYear(value: string) {
  if (!value) return value;
  const match = value.match(/^(\d{4})-\d{2}-\d{2}$/);

  if (match) {
    return match[1];
  }

  return '';
}

export function maskTwoDecimalPlaces(value: number) {
  if (!value) return value;

  return value.toFixed(2);
}
