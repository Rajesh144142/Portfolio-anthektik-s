const  mongoose =require( "mongoose");
 async function connect(){
    const mongoDbUrl=process.env.DB;
     mongoose.connect(mongoDbUrl)
     console.log('database is Connected')
} 
module.exports = connect;
