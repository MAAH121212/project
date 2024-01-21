
import { DataTypes } from "sequelize";
import { sequlize } from "../Donnection/Connect.js";

export const userModel = sequlize.define('user', {
    userName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: true
        
    },
    isConfirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})