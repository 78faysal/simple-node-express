const express = require("express");
const cors = require('cors');
const app = express();
const port = 2000;


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("WoW. I am learning node and express. I am exited to learn this")
})

const users = [
    {id:0, name:"Rihsan", email:"someone@gmail.com", number:'0179999999'}, 
    {id:1, name:"Pabel", email:"someone@gmail.com", number:'0179999999'}, 
    {id:2, name:"Samira", email:"someone@gmail.com", number:'0179999999'}, 
    {id:3, name:"Minha", email:"someone@gmail.com", number:'0179999999'}, 
    {id:4, name:"Abir", email:"someone@gmail.com", number:'0179999999'}, 
    {id:5, name:"Siam", email:"someone@gmail.com", number:'0179999999'}, 
]

app.get("/users", (req, res) => {
    const search = (req.query.search);
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    
})

// app.Method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('consoling the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'komola', 'lebu'])
})

app.get('/fruits/mangos/amropali', (req, res) => {
    res.send("yummy mangos is here")
})

app.listen(port, () => {
    console.log("Listening to Port ", port);
})