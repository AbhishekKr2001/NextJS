import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        specialization: String,
        email: String,
        phone: String,
        experience: Number,
    },
    { timestamps: true }
);

export default mongoose.models.Doctor ||
    mongoose.model("Doctor", doctorSchema);