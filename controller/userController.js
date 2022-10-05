import { User } from "../models/user.js";

var users = [new User(1,"Rayen","123",1234)];
var id = 2;
export function addUser(req,res) {
    const user = new User(id,req.body.username,req.body.password,req.body.wallet);
    users.push(user);
    id++;
    res.status(200).json(req.body);
}

export function login(req,res) {
    const userName = req.body.username
    const password = req.body.password
    const user = users.find((value) => {
        return  value.username == userName && value.password == password    
    
    })
    if (user) {
        return res.status(200).json(user)
    } 
    res.status(404).json("erreur")
}