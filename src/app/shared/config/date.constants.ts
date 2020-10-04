export class DateConstants {

  static getYears(): number[] {
    const currentYear = new Date().getFullYear() - 16; // Allow registration form 16 years old
    const minYear = currentYear - 84; // Allow registration to 100 years old

    const yearList = [];

    for (let i = currentYear; i >= minYear; i--) {
      yearList.push(i);
    }

    return yearList;
  }

  static getDaysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
  }
}

export const MONTHS = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień'
];

export const YEARS = DateConstants.getYears();
