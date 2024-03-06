const {model, Schema} = require ('mongoose');

const userSchema = new Schema ({
    username: String, 
    email: String,  
    password: String
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('user', userSchema);
