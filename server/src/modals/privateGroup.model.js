const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
  trim: true,
};

const privateGroupSchema = new mongoose.Schema(
    {
        group_name : reqString,
        description: reqString,
        password:reqString,
        members:[mongoose.Schema.Types.ObjectId]
    },
    { timestamps: true }
);


const privateGroupModel = mongoose.model('privategroups', privateGroupSchema);

module.exports = privateGroupModel;