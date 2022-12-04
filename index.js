const express = require("express");
const app = express();
const port = 8000;


/*now that we have exported our router, now we have to tell our app to use it.
We need to tell our app that all the get, post delete will be handled by this module now.*/
//use express router
//app.use is a middleware and before the server starts up, it needs to access routes
app.use('/', require('./routes/index'));







app.listen(port, function(err){
    if(err){
        console.log(`Error: ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});


















