import { getSevenDaysInWeek } from '../common';

describe('getSevenDaysInWeek()', () => {
  it('returns date range from Tuesday to Monday', () => {
    const monday = 1650295607318;
    const sevenDayInWeek = getSevenDaysInWeek(monday);

    expect(sevenDayInWeek).toEqual(['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon']);
  });

  it('returns date range from Wednesday to Tuesday', () => {
    const tuesday = 1650382340750;
    const sevenDayInWeek = getSevenDaysInWeek(tuesday);

    expect(sevenDayInWeek).toEqual(['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue']);
  });

  it('returns date range from Thursday to Wednesday', () => {
    const wednesday = 1650468740750;
    const sevenDayInWeek = getSevenDaysInWeek(wednesday);

    expect(sevenDayInWeek).toEqual(['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed']);
  });

  it('returns date range from Friday to Thursday', () => {
    const thursday = 1650555140750;
    const sevenDayInWeek = getSevenDaysInWeek(thursday);

    expect(sevenDayInWeek).toEqual(['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu']);
  });

  it('returns date range from Saturday to Friday', () => {
    const friday = 1650641540750;
    const sevenDayInWeek = getSevenDaysInWeek(friday);

    expect(sevenDayInWeek).toEqual(['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  });

  it('returns date range from Sunday to Saturday', () => {
    const saturday = 1650727940750;
    const sevenDayInWeek = getSevenDaysInWeek(saturday);

    expect(sevenDayInWeek).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  });

  it('returns date range from Monday to Sunday', () => {
    const sunday = 1650814340750;
    const sevenDayInWeek = getSevenDaysInWeek(sunday);

    expect(sevenDayInWeek).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  });
});
