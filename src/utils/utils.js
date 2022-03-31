export function getAge(dateFromInput) {
  const today = new Date();
  const birthDate = new Date(dateFromInput);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}

const utils = {
  getAge
}

export default utils;
