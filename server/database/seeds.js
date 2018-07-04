use todo_list;
db.dropDatabase();
db.tasks.insertMany(
  [
    {
      task: "do lab",
      description: "kick ass throughout the day like the bad bastards that we are"
    },
    {
      task: "break for lunch",
      task: "let some people have a nice sleep"
    }
  ]
);
