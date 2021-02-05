interface IDateObject {
  index: number;
  dia: Date;
}

const allDayFromAnYear = (): Array<IDateObject> => {
  const date = new Date(2021, 0, 1);
  const fim = new Date(date);
  fim.setFullYear(fim.getFullYear() + 1);

  let array = [];
  let i = 0;

  while (date < fim) {
    array.push({index: i, dia: new Date(date)});
    i++;
    date.setDate(date.getDate() + 1);
  }

  return array;
};

export default allDayFromAnYear;
