const mongoose = require('mongoose');

const reqString = {
  type: String,
  required: true,
  trim: true,
};

const publicGroupSchema = new mongoose.Schema(
    {
        group_name : reqString,
        material:[reqString],
        description: reqString,
        members:[mongoose.Schema.Types.ObjectId]
    }
);


const publicGroupModel = mongoose.model('publicgroups', publicGroupSchema);

module.exports = publicGroupModel;
