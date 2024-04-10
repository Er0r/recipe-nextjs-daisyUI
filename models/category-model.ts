import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({ 
    name: {
        type: String,
        required: true
    },
})

export const categoryModel = mongoose.models.categories ?? mongoose.model('categories', categorySchema);
