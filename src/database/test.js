const DataBase = require("./db");
const createProffy = require("./createProffys");

DataBase.then(async (db) => {
  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp",
    whatsapp: "984968498",
    bio:
      "Entusiasta das melhores tecnologias de química avançada. <br><br>Apaixonado por exploridr coisas em laboratório e por mudas a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
  };

  classValue = {
    subject: "Química",
    cost: "20",
  };

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220,
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220,
    },
  ];

  await createProffy(db, { proffyValue, classValue, classScheduleValues });
});
