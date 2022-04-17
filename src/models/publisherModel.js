

const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema(
    {
        publisherName: String,

        headQuarter: String,

        isHardCover: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('newPublisher', publisherSchema)