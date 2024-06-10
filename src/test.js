// How to make a simple server using express
import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Server is running");
    // we can send text, array, objects, HTML Code or Files
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})

