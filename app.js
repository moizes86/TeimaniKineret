//============= Setup ===================

const 
    PORT = process.env.PORT || 3000,
    express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");



mongoose.set('useNewUrlParser', true); //Fix deprecating error
mongoose.connect("mongodb://localhost/newapp");

app.set("view engine", "ejs"); // So we can use filename instead of filename.ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use(express.static('public'));
app.use('/articles', express.static('views/articles')); 
app.use('/:articles/:article', express.static('views/articles')); 

//========================================================

app.get('/', (req, res) => {
    res.redirect("index");
});

app.get('/index', (req, res) => {
    res.render("index");
});

app.get('/history', (req, res)=> {
    res.render("history");
});

app.get('/articles', (req, res)=> {
    res.render("articles-main");
});


// ----==== FIGURE OUT HOW TO GET AN ARTICLE BY ITS NUMBER INSTEAD OF REPEATING CODE !!! ====----
app.get('/articles/article1', (req, res)=> {
    res.render('articles/article1');
});

app.get('/articles/article2', (req, res)=> {
    res.render('articles/article2');
});

app.get('/articles/article3', (req, res)=> {
    res.render('articles/article3');
});

app.get('/articles/article4', (req, res)=> {
    res.render('articles/article4');
});

app.get('/articles/article5', (req, res)=> {
    res.render('articles/article5');
});

app.get('/names', (req, res)=> {
    res.render("names");
});

app.get('/photos', (req, res)=> {
    res.render("photos-main");
});

app.get('/photos/life-in-kineret', (req, res)=> {
    res.render("photo-albums/life-in-kineret");
});

app.get('/photos/kineret-cemetery', (req, res)=> {
    res.render("photo-albums/kineret-cemetery");
});

app.get('/photos/bet-hamotor', (req, res)=> {
    res.render("photo-albums/bet-hamotor");
});

app.get('/links', (req, res)=> {
    res.render("links");
});

app.listen(PORT, () => {
    console.log('Connected');
});