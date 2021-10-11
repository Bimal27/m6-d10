import express from "express"
import createHttpError from "http-errors"
import productModel from "./schema.js"

const productRouter = express.Router()

productRouter.post("/:id/comment" , async (req,res,next) => {
    try{
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id,
            { $push:{review :req.body}},
            {new:true}
            );
        if(updatedProduct){
            res.send(updatedProduct);
            next(createHttpError(404, `product with id ${req.params.id} not found`))
        }
    }catch(error){
        next(error);
    }
})
export default productRouter



