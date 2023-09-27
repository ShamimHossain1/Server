const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const users =[
    {id:1, name:'shamim', email:'shamim@gmailcom'},
    {id:2, name:'sauda', email:'sauda@gmailcom'},
]


app.get('/', (req, res) => {
    res.send('users management server is running')
})

app.get('/users', (req, res)=>{
    res.send(users);

})

app.post('/users', (req, res)=>{
    console.log(req.body)
    const newUser = req.body;
    newUser.id= users.length + 1;
    users.push(newUser)
    res.send(newUser);
})
 
app.listen(port, () => {
    console.log(`server is running on PORT:${port}`)
})