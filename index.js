

require('dotenv').config()
const express= require("express")
const path = require("path")
const app =express()
const methodOverride = require("method-override");
const mongoose=require("mongoose")
const Players=require("./models/players")
const Story=require("./models/blog")



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


main().then(()=>{
    console.log('db connect succsesfuly')
 })
 .catch(err=>console.log(err));


async function main(){
   await mongoose.connect(process.env.MONGO_ATLAS)
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//    })
 
}


app.get("/",(req,res)=>{
    res.redirect('/players')
})
app.get("/players", async (req,res)=>{
    const allPlayers= await Players.find({})
    res.render("players.ejs",{allPlayers})
})

app.get("/players/:id", async (req,res)=>{
    let {id}=req.params
    const allPlayers= await Players.findById(id)
    res.render("show.ejs",{allPlayers})
})



app.get("/blogs", async (req,res)=>{
    // const req.body
    const storys= await Story.find({})
    res.render("blog.ejs",{storys})
})

app.post("/blogs", async (req,res)=>{
    const {name,story}=req.body
    const blog= new Story({
        name,
        story
    })
    await blog.save()
    res.redirect("/blogs")
})


app.delete("/blogs/:id", async(req,res)=>{
        let{id}=req.params
        console.log(id)
        const blog= await Story.findById(id)
        console.log(blog)

         await Story.findByIdAndDelete(blog)

         res.redirect("/blogs")
})




 



app.listen(3000,()=>{
   console.log("server listening on port :3000 ")
})

