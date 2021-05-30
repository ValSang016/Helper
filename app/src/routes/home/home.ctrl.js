"use strict";

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        if(!req.session.login){
            req.session.login = false
            req.session.idx = -1
        }
        res.render("home/index")
    },
    login: (req, res) => {
        let session = req.session;

        res.render("home/login", {
            session : session
        });
    },
    register: (req, res) => {
        res.render("home/register")
    },
    logout: (req,res,next) => {
        req.session.destroy();
        res.clearCookie('sid');
        res.redirect("/login")
      },
};

const process = {
    login: async (req, res) => {
        let cok = req;
        const user = new User(req.body, cok);
        const response = await user.login();
        return res.json(response);

    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);

    },
};


module.exports = {
   output,
   process,
};
