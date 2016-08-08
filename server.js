var express = require("express");
var pug = require("pug");
var multer = require("multer");

var app = express();

//app.use(multer({dest : "./uploads"}));
 var upload = multer({ dest: 'uploads/' });


app.set("view engine", "pug");

app.get("/", function(req, res){
    res.render("fileUpload");
    res.end();
});

app.post("/upload", upload.single("upl"), function(req, res){
    
    /*
    "upl" should be the same as the name of the input field of the file you are uploading. 
    */
    
   // console.log(req.body);
    console.log(req.file);      //Gives all information I need. ie. byte size, encoding, mimetype, filename, path.
    var byteSize = req.file.size;
    var fileName = req.file.originalname;
    res.write("The file: " + fileName + " is : " + byteSize + " bytes.");
    res.end();
    
    
    
})


app.listen(8080, function(){
    console.log("I'm listening");
})
