db.Persons.aggregate([
    {$match:{eyeColor:{$ne:"blue"}}},
    {$group:{_id:{eyeColour:"$eyeColor",favoriteFruit:"$favoriteFruit"}}},
    {$sort:{"_id.eyeColor":-1,"_id.favoriteFruti":1}}
])