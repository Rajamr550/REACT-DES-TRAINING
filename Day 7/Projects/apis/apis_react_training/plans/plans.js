const fs = require('fs');


const getPlanDetails = async (req, res) => {
    fs.readFile('plans/plan.json', (err, data) => {
        if (err) throw err;
        let plans = JSON.parse(data);
        console.log(plans);
        res.status(200).json(plans);
    });

}

module.exports = getPlanDetails;
