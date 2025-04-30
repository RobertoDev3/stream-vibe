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

export function maskTime(value: number) {
  if (!value && value !== 0) return '';

  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  const hourText = `${hours} h`;
  const minuteText = `${minutes.toString().padStart(2, '0')} min`;

  if (hours > 0 && minutes > 0) {
    return `${hourText} ${minuteText}`;
  } else if (hours > 0) {
    return hourText;
  } else if (minutes > 0) {
    return minuteText;
  }

  return '';
}
