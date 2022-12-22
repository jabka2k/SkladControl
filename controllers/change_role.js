const db = require("../routes/db-config");

const change_role = async (req, res) => {
    const {role, id} = req.body
    db.query('UPDATE users SET role =? WHERE id =?', [role, id], async (err, result) => {
        return res.json({status: "success", success: "роль изменена"});
    })
}

module.exports = change_role;