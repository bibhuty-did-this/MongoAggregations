// show dbs
// use Test
db.Persons.aggregate([
    {
        $group:{
            _id:"$company.location.country",
            avgAge:{$avg:"$age"},
            totalPerson:{$sum:NumberInt(1)}
        }
    }
])