import  express  from "express";
import * as allRouters from "./index.router.js";
import { createTable } from "./Donnection/Connect.js";
import { userModel } from "./DB/user.model.js";
import { productModel } from "./DB/product.model.js";
const app = express();

app.use(express.json());
app.use('/api/v1/User',allRouters.UserRouter);
app.use('/api/v1/Product',allRouters.ProductRouter);
createTable();
userModel.hasMany(productModel, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
})
productModel.belongsTo(userModel)

app.listen(3000,function(){
    console.log("Server is Runnin")
})