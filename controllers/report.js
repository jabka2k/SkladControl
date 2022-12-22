const db = require("../routes/db-config");

const reports = async (req, res) => {
    db.query('SELECT * FROM reports', async (Err, result) => {
        return res.json(result);
    })
}

module.exports = reports;