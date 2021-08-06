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
        desp:{type:string, required: true},
        members:[mongoose.Schema.Types.ObjectId]
    }
);


const publicGroupModel = mongoose.model('user', publicGroupSchema);

module.exports = publicGroupModel;
