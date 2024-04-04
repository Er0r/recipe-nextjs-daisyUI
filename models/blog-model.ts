import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },

    slug: {
        type: String,
        required: true
    },
     category: {
        type: String,
        required: false
    },
    featuredImage: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    }
});

export const blogModel = mongoose.models.blogs ?? mongoose.model('blogs', blogSchema);