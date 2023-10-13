const express = require("express");
const app = express();
const hbs = require("hbs");
const port =5000;

const path = require("path");

//public static
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set("view engine" ,"hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));

app.get("", (req, res)=>{   
    res.render("index");
})

app.get("/about", (req, res)=>{   
    res.render("about");
})

app.get("/weather", (req, res)=>{   
    res.render("weather");
})

app.get("*", (req, res)=>{   
    res.render("404err",{
        errormsg:"Opps ! Page not found",
    });
})

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`)
})