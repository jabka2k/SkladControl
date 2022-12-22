const jwt = require("jsonwebtoken");
const db = require("../routes/db-config")
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.json({status: "error", error: "Пожалуйста введите ваши электронную почту и пароль"});
    else {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (Err, result) => {
            if (Err) throw Err;
            if(!result.length || !await bcrypt.compare(password, result[0].password)) {
                return res.json({status: "error", error: "Неверные электронная почта или пароль"});
            }
            else {
                const token = jwt.sign({ id: result[0].id, role: result[0].role}, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                }
                res.cookie("userRegistered", token, cookieOptions);
                return res.json({status: "success", success: "Пользователь авторизован"});
            }
        })
    }
}

module.exports = login;