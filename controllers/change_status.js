const db = require("../routes/db-config");

const change_status = async (req, res) => {
    const {new_status, id} = req.body
        db.query('UPDATE reports SET status =? WHERE id =?', [new_status, id], async (err, result) => {
            return res.json({status: "success", success: "статус изменен"});
        })
}

module.exports = change_status;