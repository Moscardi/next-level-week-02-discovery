const DataBase = require("sqlite-async");

function execute(db) {
  return db.exec(`
      CREATE TABLE IF NOT EXISTS proffys (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          whatsapp,
          avatar TEXT,
          bio TEXT
      );
  
      CREATE TABLE IF NOT EXISTS classes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          subject TEXT,
          cost TEXT,
          proffy_id INTEGER,
          FOREIGN KEY (proffy_id) REFERENCES proffys(id)
      ); 
  
      CREATE TABLE IF NOT EXISTS class_schedule (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          class_id INTEGER,
          weekday INTEGER,
          time_from INTEGER,
          time_to INTEGER,
          FOREIGN KEY (class_id) REFERENCES classes(id)
      );
    `);
}

module.exports = DataBase.open(__dirname + "/database.sqlite").then(execute);
