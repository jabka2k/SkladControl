const db = require("../routes/db-config");

const test = async (req, res) => {
    db.query('SELECT id FROM users', async (Err, result) => {
        return res.json(result);
    })
}

module.exports = test;