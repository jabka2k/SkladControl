const db = require("../routes/db-config")

const report = async (req, res) => {
    const {product, partiya, sklad, description} = req.body;
    if (!product || !partiya || !sklad || !description) return res.json({
        status: "error",
        error: "Пожалуйста заполните данные"
    });
    else {
        db.query('INSERT INTO reports SET ?', {
            product: product,
            partiya: partiya,
            sklad: sklad,
            description: description,
            status: "in"
        }, (error, result) => {
            if (error) throw error;
            return res.json({status: "success", success: "Отчет создан"})
        })
    }
}

module.exports = report;