let mongoose = require('mongoose')

let chatSchema = new mongoose.Schema({
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

let eventSchema = new mongoose.Schema({
    location: String,
    pic: String,
    description: String,
    date: String,
    things: String,
    chats: [chatSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
})

module.exports = mongoose.model('Event', eventSchema)