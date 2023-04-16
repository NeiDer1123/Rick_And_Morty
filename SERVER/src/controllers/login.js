const users = require("../utils/users")

function login(req, res){
    const {email, password} = req.query
    const validateUser = users.find((user)=>{
        return user.email === email && user.password === password
    }) 
    if(validateUser){
        res.status(200).json({access: true})
    } else {
        res.status(200).json({access: false})
    }
}

module.exports = login