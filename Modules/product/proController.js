import q from "../connection/connector.js"
export const getProduct = (req, res) => {
    q.execute(`select * from products`, (err, result) => {
        if (err){
            res.json({message: "sql error", err})
        }
        else
        {
            res.json({message: "Done", result})
        }
    })
    
}
export const postProduct = (req, res) => {
    let {name, price, description, userID} = req.body;
    q.execute(`insert into products (name, price, description, userID) values ('${name}', '${price}', '${description}', '${userID}')`, 
    (err, result) => {
        if (err){
            res.json({message: "sql error", err})
        }
        else{

        }res.json({message: "Done", result})
    })
}

export const delProduct = (req, res) => {
    let{id} = req.params;
    q.execute(`delete from products where id= ${id}`, (err, result) => {
      if (err){
        res.json({message: "sql error", err})
      }  
      else{
        if (result.affectedRows) {
            res.json({message: "delete success", result})
        }
        else{
            res.json({message: "invalid Account"})
        }
      }
    })
}

export const setProduct = (req, res) => {
    let{id} = req.params;
    let{name, price} = req.body;
    q.execute(`update products set name= '${name}', price= '${price}' where id= ${id}`, (err, result) => {
        if (err){
            res.json({message: "sql error", err})
        }
        else{
            if (result.affectedRows){
                res.json({message: "Done", result})
            }
            else{
                res.json({message: "invalid acc"})
            }
        }
    })
}
