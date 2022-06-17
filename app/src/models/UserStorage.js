"use strict";

class UserStorage {
  static #users = {
    id: ["samatti", "samatti1", "samatti2"],
    password: ["1234", "1234", "12345"],
    name: ["사맛디", "사맛디1", "사맛디2"],
  };

  static getUsers(...params) {
    const users = this.#users;
    const newUsers = params.reduce((newUsers, param) => {
      if (users.hasOwnProperty(param)) {
        newUsers[param] = users[param];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
