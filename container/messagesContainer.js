const { option } = require("../db/config/config");
const knex = require("knex")(option.sqlite);
class Messages {
  constructor(table) {
    this.table = table;
  }
  async getAll() {
    try {
      const messageList = await knex(this.table).select("*");
      if (messageList.length > 0) {
        return messageList;
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
    }
  }
  async save(obj) {
    try {
      await knex(this.table).insert(obj);
      console.log("registro creado", obj);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Messages;
