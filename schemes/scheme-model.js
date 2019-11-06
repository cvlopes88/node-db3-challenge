
const db = require('../data/db-config');

module.exports = {
find,
findById,
findSteps,
add,
remove
}; 

function find() {
    return db.select('*').from('schemes');
};

function findById(id) {
    return db('schemes').where({id}).first();
    
};


function findSteps() {
    return db.select('*').from('schemes');
};


async function add() {
    const [id] =await db('schemes').insert(schemes)
    return findById(id);
};


function remove(id) {
    return db('schemes').where({id}).del();
};
