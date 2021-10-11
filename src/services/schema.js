import mongoose from "mongoose"

const { Schema, model } = mongoose

const reviews = new Schema (
    {

    },
    review [{
        comment :{type: String, required: true},
        rate :{type: Number,required: true}
    },
    {
        timestamps: true,
    }
  ]
)
export default model('productReviews',reviews)