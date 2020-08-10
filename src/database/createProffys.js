module.exports = async function (
  db,
  { proffyValue, classValue, classScheduleValues }
) {
  const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
     `);

  const insertedClass = await db.run(`
        INSERT INTO classes (
            proffy_id,
            subject,
            cost
        ) VALUES (
            ${insertedProffy.lastID},
            "${classValue.subject}",
            "${classValue.cost}"
        );
    `);

  const insertedAllClassScheduleValues = classScheduleValues.map(
    (classScheduleValue) => {
      return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                ${insertedClass.lastID},
                ${classScheduleValue.weekday},
                ${classScheduleValue.time_from},
                ${classScheduleValue.time_to}
            );
        `);
    }
  );

  await Promise.all(insertedAllClassScheduleValues);
};
