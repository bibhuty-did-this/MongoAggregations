db.Persons.aggregate([
    {$limit:100},
    {$match:{eyeColor:{$ne:"blue"}}},
    {$group:{_id:{eyeColor:"$eyeColor",favoriteFruit:"$favoriteFruit"}}},
    {$sort:{"_id.eyeColor":1,"_id.favoriteFruit":-1}},
    
    //{$count:"totalCount"}
])






