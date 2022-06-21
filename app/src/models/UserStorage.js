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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
