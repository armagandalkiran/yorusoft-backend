const User = require("../models/User");

exports.user_create_post = async function(req, res) {

    const newUserMessage = new User(req.body);

    try{
        const savedUserMessage = await newUserMessage.save();
        res.status(200).json(savedUserMessage);
    }catch(err){
        res.status(500).json(err);
    }
};

exports.user_message_get = async function(req, res) {

    const qNew = req.query.new;
    try{
        let userMessages;

        if(qNew){
            userMessages = await User.find().sort({createdAt: -1}).limit(5)
        } else {
            userMessages = await User.find();
        }
        res.status(200).json(userMessages);
    } catch(err){
        res.status(500).json(err);
    }
};