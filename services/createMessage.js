const { option } = require("../db/config/config");
const knex = require("knex")(option.sqlite);

/* Crea la tabla con los productos */
/* knex.schema
  .createTable("messages", (table) => {
    table.increments("id"),
      table.string("date"),
      table.string("email");
      table.string("message")
      
  })
  .then(() => {
    console.log("La tabla mensaje se creo correctamente");
  })
  .catch((err) => {
    console.log(err);
    throw new Error(err);
  })
  .finally(() => {
    knex.destroy();
  });   */

/* Se insertan productos a la tabla*/
knex("messages")
  .insert([
    {
      date: "11/11/2022 18:40:28",
      email: "paolinilaumann@gmail.com",
      message: "hollaaaaa",
    },
    {
      date: "12/11/2022 19:10:43",
      email: "paolinilaumann@gmail.com",
      message: "como estas?",
    },
    {
      date: "12/11/2022 19:11:16",
      email: "administrador@adimin",
      message: "bien !!!",
    },
    {
      date: "12/11/2022 19:39:11",
      email: "german@gmail.com",
      message: "como estas?",
    },
    {
      date: "12/11/2022 19:39:33",
      email: "paolinilaumann@gmail.com",
      message: "bien",
    },
  ])
  .then(() => {
    console.log(`Se insertaron los mensajes`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    knex.destroy();
  });
