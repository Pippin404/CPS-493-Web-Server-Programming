//model knows about database. controller does not. (See users for its domain)

const data = require('../data/users.json');

function getAll() {
    return data.items;
}

//finds the first item in the list that matches the id
function get(id){
    return data.items.find(item => item.id == id);
}




module.exports = {
    getAll, get
    //getAll is sending a pointer, not a function caller
}