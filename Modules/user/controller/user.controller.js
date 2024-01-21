import qDB from "../../connection/connector.js"

export const getUser = (req, res) => {
    qDB.execute(`select * from users`, (err, result) => {
        if(err){
            res.json("syntax error")
        }else{
        res.json({message: "DONE MD", result})
}})
}

export const addUser = (req, res) => {
    let {id, name, email, password} = req.body;
    qDB.execute(`INSERT INTO users (id,name,email,password) VALUES ('${id}','${name}','${email}','${password}')`, (err, result) =>{
        if (err){
            res.json({message: "syntax err", err});
        }
        else{
            res.json({message: "DOne", result})
        }
    })
    
    
}
 export const updateUser = (req, res) => {
    let {id} = req.params;
    let {name} = req.body;
    qDB.execute(`UPDATE users SET name = '${name}' WHERE id ='${id}'`, (err, result) => {
        if(err){
            res.json({message:"error in syntax", err})
        }else{
            res.json({message: "Done budd", result})
        }
    })
 }
 export const searchUser = (req, res) => {
    console.log(req.query)
    let {searchkey} = req.query;
    qDB.execute(`Select * from users where name like '%${searchkey}%'`, (err, result) => {
        if(err){
            res.json({message:"error in syntax", err})
        }else{
            res.json({message: "Done budd", result})
        }
    })
 }
