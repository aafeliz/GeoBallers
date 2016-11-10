'use strict';

const p = process.cwd();

module.exports = (app)=>{
    
    //app.get('/', (req, res)=>{res.send('index')});
    
    app.get('/world', (req, res)=>{res.sendFile(p + "/app/json/world.geo.json")})
    app.get('/us', (req, res)=>{res.sendFile(p + "/app/json/us.geo.json")})
    app.get('/ny', (req, res)=>{res.sendFile(p + "/app/json/ny.geo.json")})
    app.get('/man', (req, res)=>{res.sendFile(p + "/app/json/man.geo.json")})
    
}