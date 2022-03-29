const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.port || 8000;

var data = [
    {
        id: 1,
        user: 'user1',
        timestamp: '1',
        content: 'create an account 1'
    },
    {
        id: 2, 
        user: 'user2',
        timestamp: '2',
        content: 'create an account 2'
    },
    {
        id: 3,
        user: 'user3',
        timestamp: '3',
        content: 'create an account 3'
    }
];

app.use(cors());

app.listen(PORT, () => {
    console.log(`Backend is listening to PORT ${PORT}`);
})

app.get('/todos/list', (req, res) => {
    res.json(data);
});

app.get('/todos/detail/:id', (req, res) => {
    res.json(data.find(item => item.id === parseInt(req.params.id)));
});