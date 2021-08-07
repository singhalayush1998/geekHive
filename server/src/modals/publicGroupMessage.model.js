const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
  trim: true,
};


const PublicMessageSchema=  mongoose.Schema({
    groupid:[{type:mongoose.Schema.Types.ObjectId,required:true,ref:"publicgroup"}],
    senderid:[{type:mongoose.Schema.Types.ObjectId,required:true,ref:"user"}],
    text: reqString,
},
{ timestamps: true }
)


const publicMessageModel = mongoose.model('publicmessages', PublicMessageSchema);

module.exports = publicMessageModel;


