const fs = require('fs');


const getShoppingItems = async (req, res) => {
    fs.readFile('shopping/shop.json', (err, data) => {
        if (err) throw err;
        let shoppingItems = JSON.parse(data);
        res.status(200).json(shoppingItems);
    });

}

module.exports = getShoppingItems;
