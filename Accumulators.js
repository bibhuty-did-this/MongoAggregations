// show dbs
// use Test
db.Persons.aggregate([
    // Accumulator maintain state for each group of the document
    // Only can be used with group stage
    {$group:{_id:"$age",count:{$sum:1}}}
])




