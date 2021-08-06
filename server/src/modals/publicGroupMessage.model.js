const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
  trim: true,
};


const PublicMessageSchema=  mongoose.Schema({
    groupid:reqString,
    senderid:reqString,
    text: reqString,
},
{ timestamps: true }
)


const publicMessageModel = mongoose.model('publicmessages', PublicMessageSchema);

module.exports = publicMessageModel;


