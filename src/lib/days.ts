import dayjs from "dayjs";

const getDay = (day:string, format = 'DD MMMM, YYYY'): string => {
  return dayjs(day).format(format);
};

export default getDay;