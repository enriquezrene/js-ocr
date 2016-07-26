var okrabyte = require("okrabyte");
okrabyte.decodeFile("/home/rene/Documents/proyectos/ocr-js/js-ocr/demo/hello_world.png", function(error, data){
    console.log(data); // Hello World!
    alert(data);
});