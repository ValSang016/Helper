"use strict";

const { Console } = require("console");
const fs =require("fs").promises;

class UserStorage {
       static #getUserInfo(data, id) { 
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //=> { id:, psword:, name }
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo; 
    }


    static getUsers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        }) //성공시에
        .catch(console.error); //실패시에
        
         
    }



    static save(userInfo) {
        const users = JSON.parse(data);
        users.name.push(userInfo.name);
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);

    }
}

module.exports = UserStorage;