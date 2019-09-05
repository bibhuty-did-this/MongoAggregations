// show dbs
// use Test

db.Persons.aggregate([
    {$unwind:"$tags"},
    {
        $group:{
            _id:"$tags",
            count:{$sum:NumberInt(1)}
        }
    }
])

