require("dotenv").config();

const knex=require("knex")({
    client:"mysql",
    connection:{
        host:'localhost',
        user:'root',
        database:'healthcare',
        password:'suraj@123'
    }
})

knex.schema.createTable("user",(table)=>{
    table.increments("id")
    table.string("name")
    table.integer("age")
    table.string("gender")
}).then(()=>{
    console.log("table create");
}).catch((err)=>{
    console.log("table already exists");
})

module.exports=knex


