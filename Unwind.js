// If you want to group with elements of an array we need to unwind first
// show dbs
// use Test
// db.Persons.find({})
db.Persons.aggregate([
    // Stage 1
    {$unwind:"$tags"},
    // Stage 2
    {$project:{name:1,gender:1,tags:1}},
    // Stage 3
    {$group:{_id:"$tags"}},
    // Stage 4
    // {$count:"count"}
])


