const mongoose = require('mongoose');

module.exports = () => {
  
    return mongoose.connect("mongodb+srv://babli:babli1998@cluster0.zv3a5on.mongodb.net/todo?retryWrites=true&w=majority");
}