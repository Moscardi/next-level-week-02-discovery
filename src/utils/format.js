const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
];

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

function getSubject(subjectNumber) {
  const position = +subjectNumber - 1;
  return subjects[position];
}

function getWeekday(weekdayNumber) {
  const position = +weekdayNumber - 1;
  return weekdays[position];
}

function convertHoursToMinutes(textTime) {
  const [hour, minutes] = textTime.split(":");

  return Number(hour * 60 + minutes);
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes,
};
