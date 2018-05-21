var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to database
mongoose.connect('mongodb://test:test@ds229290.mlab.com:29290/todo-mcglynn');

//Create a schema -- this is like a blueprint
var todoSchema = new mongoose.Schema({
    item: String
});

//Create a todo model based on Schema
var Todo = mongoose.model('Todo', todoSchema);

//default todo items
//var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req, res){
        //get data from mongoDB and pass it to the view
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', {todos: data});
        });
    });

    app.post('/todo', urlencodedParser, function(req, res){
        //get data from the view and add it to mongoDB
        var newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function(req, res){
        //delete requested item from mongoDB
        Todo.find({item: req.params.item.replace(/\-/g, ' ')}).remove(function(err, data){
            if (err) throw err;
            res.json(data);
        });
    });
};