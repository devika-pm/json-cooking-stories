//import json server in index.js
 const jsonServer = require('json-server')

 //create a server for cooking stories app
 const cookingStoryServer =jsonServer.create()

 //set up path/route from json file
 const router =jsonServer.router("db.json")

 //returns middlewears used by JSON server
 const middlewares = jsonServer.defaults()

 //set up port for running server
 const port = 4000 || process.env.port

 //use middlewares and router in server
 cookingStoryServer.use(middlewares)
 cookingStoryServer.use(router)

 //to listen server from resolving request from client
 cookingStoryServer.listen(port,()=>{
    console.log(`cooking stories server started at port ${port}, and waiting for client request!!!`);
 })