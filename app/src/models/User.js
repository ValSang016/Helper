"use strict";

const UserStorage = require("./UserStorage");


class User {
    constructor(body, cok) {
        this.body = body;
        this.cok = cok;
    }
    async login() {
        const client = this.body;
        const cok = this.cok;
        try {
        const user = await UserStorage.getUserInfo(client.id);   //await은 async함수 안에서만 쓸 수 있음

        if (user) {
            if (user.id ===client.id && user.psword === client.psword) {
                cok.session.login = true
                cok.session.idx = client.id;
                return { success: true, session: cok.session.login };
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
        console.log(err);
        return { success: false, err };
    }

    }

    async register() {
        const client = this.body;
        try {
        const response = await UserStorage.save(client);
        return response;
        } catch (err) {
        return { success: false, err };
        }}

}

module.exports = User;