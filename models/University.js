import mongoose from "mongoose";

const UniversitySchema = new mongoose.Schema({
    uni_name: {type: String, required: true},
    total_case: {type: Number, required: true},
    as_of_today: {type: TimeRanges, required: true}, //TODO: validate
    new_cases: {type: Number, required:true},
})

const University = mongoose.model('university',UniversitySchema);

export default University;
