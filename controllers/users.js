const db = require("../routes/db-config");

const users = async (req, res) => {
    db.query('SELECT id FROM users', async (Err, result) => {
        return res.json(result);
    })
}

module.exports = users;