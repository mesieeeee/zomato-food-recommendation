import express from 'express';

const app = express();

//app.get('/', (req, res) => {
//    res.send("Server is ready");
//});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is not a joke'
        },
        {
            id: 3,
            title: 'Funniest joke',
            content: 'Backend is boring or intresting or funny'
        },
        {
            id: 4,
            title: 'Another most funniest joke',
            content: 'alka is gonna fight'
        },
        {
            id: 5,
            title: 'most entertaining joke',
            content: 'alka loves backend'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Serve at http://localhost:${port}');
});
