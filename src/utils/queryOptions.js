module.exports = {
    sections: {
        "country": ((e) => { return { "$regex": e, "$options": "i" } }),
        "number_document": ((e) => { return { "$regex": e, "$options": "i" } }),
        "email": (e) => ((e) => { return { "$regex": e, "$options": "i" } }),
        "first_name": ((e) => { return { "$regex": e, "$options": "i" } }),
        "second_name": ((e) => { return { "$regex": e, "$options": "i" } }),
        "surname": ((e) => { return { "$regex": e, "$options": "i" } }),
        "second_Surname": ((e) => { return { "$regex": e, "$options": "i" } }),
        "type_document": ((e) => { return { "$regex": e, "$options": "i" } }),
    }
}
