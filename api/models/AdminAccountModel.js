import mongoose from "mongoose";

const adminAccountSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    salt: { type: String, required: true, trim: true },
},
    {
        timestamps: true,
        versionKey: false,
        collection: 'Admins'
    }
);

const AdminAccountModel = mongoose.model("AdminAccount", adminAccountSchema);
export default AdminAccountModel;