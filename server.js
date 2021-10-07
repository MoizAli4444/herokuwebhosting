const express = require('express'); // server software
const bodyParser = require('body-parser'); // parser middleware
const Signup = require('./models/signup'); // User Model
// const Blog = require('./models/blogs'); // User Model

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))

// app.use('/articles' , Blog);

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: false }));




// Route to Log out
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});


app.get('/signup', function(req, res) {
    res.render('signup');
  });

  app.get('/', function(req, res) {
    res.send('its working');
  });
  


// Route to Signup Page
app.post('/signup', async function(req , res){

    let usersignup = new Signup({
        username : req.body.username,
        password : req.body.password,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        rand_token : Date.now() +''+ Date.now()
    })


    try{
        usersignup = await usersignup.save()
        res.send('Signup Successfully');


    }catch(e){
        console.log('catch ', e.message);
    }
})


//
// assign port
const port = process.env.PORT || 2023;
app.listen(port, () => console.log(`This app is listening on port ${port}`));