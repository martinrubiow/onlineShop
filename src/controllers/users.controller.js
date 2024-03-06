const User = require('../models/user.model');

const createUser = async(req, res) => {
    const newUser= await User.create(req.body);
    res.json(newUser);
}
module.exports = {createUser}