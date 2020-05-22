let express =  require("express")

let app = express()

let mongodb = require("mongodb")

let db 

let connectionString = 'mongodb+srv://Peace:Peaceblessing@1@cluster0-ra4ct.mongodb.net/to-do-App?retryWrites=true&w=majority'
//mongodb.connect(a = connection striing,b,c)
mongodb.connect(connectionString, {useNewUrlParser: true}, function(err, client)
{
db = client.db()
app.listen(3000)
})

app.use(express.urlencoded({extended: false}))

app.get('/', function(req, res)
{
  db.collection('items').find().toArray( function(err,items){
  console.log(items)
  res.send(
    `
    <!DOCTYPE html>
<html>
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Simple To-Do App</title>
 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
</head>
<body>
 <div class="container">
   <h1 class="display-4 text-center py-1">SAMPLE LIST</h1>
   
   <div class="jumbotron p-3 shadow-sm">
     <form action="/create-items" method="POST">
       <div class="d-flex align-items-center">
         <input name="item" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
         <button class="btn btn-primary">Add New Item</button>
       </div>
     </form>
   </div>
   
   <ul class="list-group pb-5">
     ${items.map(function()
       {
          return "items"
       }).join("")
    }
   </ul>
   
 </div>
 
</body>
</html>
    `
)
    
  })  
})

app.post('/create-items', function(req,res)
{
   //console.log(req.body.item)
   db.collection('items').insertOne({text: req.body.item},function()
   {
    res.send("Thank You For submit")
   })  
})




//nodemon - node start your app, and mon is monetary your app