const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
  trim: true,
};


const PrivateMessageSchema=  mongoose.Schema({
    groupid:reqString,
    senderid:reqString,
    text: reqString,
},
{ timestamps: true }
)


const privateMessageModel = mongoose.model('privatemessages', PrivateMessageSchema);

module.exports = privateMessageModel;