import { productModel } from "../../DB/product.model.js"
import { userModel } from "../../DB/user.model.js";


export const getAllproducts = async(req, res) => {
    const productData = await productModel.findAll({
        include: {
            model: userModel
        }
    });
    res.json({message: "Done", productData})
}

export const addNewProducts = async(req, res) =>{
    let {name, description, price, quantity, userId} = req.body;
    const proData = await productModel.create({name, description, price, quantity, userId});
    res.json({message: "Done", proData})
}
export const updatePro = async(req, res) => {
    let {id} = req.params;
    let {name} = req.body;
    const Update = await userModel.update({name}, {where:{id}})
    res.json({message: "Updated Successfully", Update});
}