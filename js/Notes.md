- This is the Mern stack project majorly designed to learn the concept of backend

Model links :- https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

The whole and sole purpose is to learn the backend


_________________Notes_________________

#HTTP Request to connect backend and frontend

Link -> OS -> browser -> Domain name Resolution -> IP address (having port no. and server address) -> connection establish

types of HTTP req:-
1) GET (retain/fetch data)
2) PUT (update any data)
3) POST (submit any data)
4) DELETE (remove any data)

Idempotent req:- GET,PUT,DELETE as they work on predefined data or the data present at the database.
Not Idempotent :- POST as it create a new resource at the server.

# Express js
1) Framework of NodeJS works on server side application.
2) To install the express use "npm i express"
3) Creating a Server using these 2 lines
    1.  import express from "express"
    2. const app = express(); // app is an instance of the express()
    3. app.listen(process.env.PORT||8000,()=>{ callback function }) app is listening on port mentioned in .env file if .env port number is not available then 8000 will be alloted.
    4. Finally a live server is created.

Express Request:- 
1. The get request will be make by the client an in response it will send h1 to the route mention. 
app.get("route",(req,res)=>{
    callback function 
    eg:- res.send(<h1>Hello World</h1>);
})

2. app.post("route",(req,res)=>{
    callback function
    // data will be present on the body of the html page. So to get the field data we will do
    const {a,b,c,.....} = req.body;
    console.log(a);
        .
        .
        .
})

For the post request we have to parse the body of the client requesting. For this we have to use a middleware that is body-parser.
for this we just need to do
import bodyParser from "body-parser";
app.use(bodyParser.json()); // for json format

The above method is outdated now. Express itself provide this.
just have to write

app.use(express.json()); // this statement is enough for doing the same thing.