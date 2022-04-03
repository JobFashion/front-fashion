export function getAge(dateFromInput) {
  const today = new Date();
  const birthDate = new Date(dateFromInput);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}

export const REGEX_MAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const utils = {
  getAge,
  REGEX_MAIL
}

export default utils;
