import { format } from 'date-fns';

// https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
export function dateFormatFromUnix(
  unixTime: number,
  formatStr: string = 'dd MMM, yyyy'
) {
  return format(new Date(unixTime), formatStr);
}
