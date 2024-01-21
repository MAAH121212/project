
import { DataTypes } from "sequelize";
import { sequlize } from "../Donnection/Connect.js";

export const productModel = sequlize.define('product', {
    name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description :{
        type :DataTypes.STRING(50),
        allowNull: true,
        },
    price :{
        type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
    userId:{
        type: DataTypes.INTEGER
        
    }
})