db.Persons.aggregate([
    
    // Stage 1
    {
        $match:{
            $and:[
                {isActive:true},
                {age:{$gt:25}}
            ]
        }
    },
    // Stage 2(If we want to group after it, use `_id.<field_name>`)
    {
        $group:{
            _id:{
                country:"$company.location.country",
                gender:"$gender"
            }
        }
    },
    // Stage 3
    {
        $sort:{
            "_id.country":-1,
            "_id.gender":1
        }
    },
    //Stage 4
    {
        $count:"country-gender-count"
    }
])


