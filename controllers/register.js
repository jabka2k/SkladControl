const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");
const express = require("express");
const login = require("./login");


const register = async (req, res) => {
    const {email, password: Npassword} = req.body
    if(!email || !Npassword) return res.json({status: "error", error: "Пожалуйста введите ваши электронную почту и пароль"});
    else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if(err) throw err;
            if(result[0]) return res.json({status: "error", error: "Электронная почта уже зарегистрирована"})
            else {
                const password = await bcrypt.hash(Npassword, 8);
                db.query('INSERT INTO users SET ?', {email: email, password: password}, (error, result) => {
                    if (error) throw error;
                    return res.json({status: "success", success: "Пользователь зареистрирован"})
                })
            }
        })
    }
}
module.exports = register;