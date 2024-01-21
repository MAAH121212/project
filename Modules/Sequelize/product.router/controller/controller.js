import { json } from "sequelize";
import { Op } from 'sequelize';
import { userModel } from "../../DB/user.model.js";
import { productModel } from "../../DB/product.model.js";

export const getAlluser = async (req, res) => {
    const userData = await userModel.findAll({
        include:{
            model: productModel
        }
    });
    res.json({message: "Done",userData })
}

export const createUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const newUser = await userModel.create({userName: name, email, password})
        res.json({message: "Added Successfully", newUser})
    }
    catch (error){
        if(error.parent && error.parent.errno == 1062){
            res.json({message: "No duplication on email", error});

        }
        res.json({message: "Error", error});
    }
}
export const updateUser = async(req, res) => {
    let {id} = req.params;
    let {userName} = req.body;
    const Update = await userModel.update({userName}, {where:{id}})
    res.json({message: "Updated Successfully", Update});
}

export const deleteUser = async(req, res) =>{
    let {id} = req.params;
    const deleting = await userModel.destroy({where:{id}});
    res.json({message: "Deleted Successfully", deleting});
}