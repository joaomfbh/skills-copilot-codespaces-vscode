// Create web server
// 1. Create a web server
// 2. Add a route for /comments
// 3. Send back some fake data
// 4. Test on Postman

const express = require('express');
const app = express();
const port = 3000;

// 2. Add a route for /comments
app.get('/comments', (req, res) => {
    // 3. Send back some fake data
    res.send([
        {
            "id": 1,
            "body": "some comment",
            "postId": 1
        },
        {
            "id": 2,
            "body": "some comment",
            "postId": 1
        },
        {
            "id": 3,
            "body": "some comment",
            "postId": 2
        }
    ]);
});

// 1. Create a web server
app.listen(port, () => console.log(`Listening on port ${port}...`));
