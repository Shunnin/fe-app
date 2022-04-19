export const getSevenDaysInWeek = (today: number = Date.now()): string[] => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const sevenDays = [];

  // eslint-disable-next-line no-magic-numbers
  for (let i = 1; i <= 7; i++) {
    // eslint-disable-next-line no-magic-numbers
    sevenDays.push(days[new Date(today + i * 24 * 60 * 60 * 1000).getDay()]);
  }

  return sevenDays;
};
