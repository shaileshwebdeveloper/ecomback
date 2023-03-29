const mongoose = require('mongoose')

// Always use new keyword

const userShema = new mongoose.Schema({

  firstname : {type : String, required : true},
  lastname : {type : String},
  email : {type : String, required : true},
  password : {type : String},

})


const UserModel = mongoose.model('user', userShema)  

module.exports =  {UserModel}


// In userSchema you can add if permitted schema types such as string,Boolean, Number
// user collection will be formed in database