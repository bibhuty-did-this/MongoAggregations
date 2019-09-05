// $out: it is the last stage in aggregation pipeline

db.Persons.aggregate([
    {$project:{
        name: 1,
        nameType:{$type:"$name"},
        ageType:{$type:"$age"},
        tagsType:{$type:"$tags"},
        companyType:{$type:"$company"}
    }},
    {$out:"outCollection"}
],
    // All aggregation stages can use maximum of 100MB of data
    // Server will throw an error if RAM limit exceeded
    // Following option will enable MongoDB to write stages data to the temporal file
    {allowDiskUse:true} 
)


