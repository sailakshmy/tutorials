const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim : true,//To trim the white spaces
        minlength: 3
    },
},{
    timestamps: true,//To automatically capture details as to when it was created/modified
}
);
 const User = mongoose.model('User',userSchema);

 module.exports = User;