export const getNextSevenDays = (): string[] => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const next7Days = [];

  // eslint-disable-next-line no-magic-numbers
  for (let i = 0; i < 7; i++) {
    // eslint-disable-next-line no-magic-numbers
    next7Days.push(days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]);
  }

  return next7Days;
};
