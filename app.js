//============= Setup ===================

const express = require("express"),
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
    res.render("articles");
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
    res.render("photos");
});

app.get('/links', (req, res)=> {
    res.render("links");
});

app.listen('3000', () => {
    console.log('Connected');
});