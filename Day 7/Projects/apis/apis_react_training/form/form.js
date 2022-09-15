const fs = require('fs');


const getFormItems = async (req, res) => {
    fs.readFile('form/form.json', (err, data) => {
        if (err) throw err;
        let formDetails = JSON.parse(data);
        res.status(200).json(formDetails);
    });

}

module.exports = getFormItems;
