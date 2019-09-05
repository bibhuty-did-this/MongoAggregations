// Unary Operators:
// $type, $or, $gt, $lt, $and, $multiply
// Note: Unary operators are usually used in $project stage & in the $group stage it can be used 
//       only in conjuction with accumulators.

db.Persons.aggregate([
    {
        $project:
        {
            name:1,
            eyeColorType:{$type:"$eyeColor"},
            ageType:{$type:"$age"},
            tagsType:{$type:"$tags"}
        }
    }
])





