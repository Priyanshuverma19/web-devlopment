db.items.updateOne({name:"moto 30s"},{$set:{price: 2}})
db.items.updateMany({name:"moto 30s"}, {$set:{price:3, rating:1}})