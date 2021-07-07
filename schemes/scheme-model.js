
const db = require('../data/db-config');

module.exports = {
find,
findById,
findSteps,
add,
remove,
update
}; 

function find() {
    return db.select('*').from('schemes');
};

function findById(id) {
    return db('schemes').where({id}).first();
    
};


function findSteps(id) {
    return db
   
    .select('steps.*')
    .from('steps')
    .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
    .where('schemes.id', id)
    
};


 function add(scheme) {
   return db('schemes', 'id').insert(scheme)
     
};


function remove(id) {
    return db('schemes').where({id}).del();
};

function update(changes, id) {
    return db('schemes')
    .where('id', id)
    .update(changes, '*');
};