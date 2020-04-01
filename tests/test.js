var test = require('tape');
// var tapSpec = require('tap-spec');
var todoFunctions = require('../scripts/logic');


//TEST VARIBLES
var state = [
  { id: -3, description: 'first todo', done: false},
  { id: -2, description: 'second todo', done: false},
  { id: -1, description: 'third todo', done: false},
]; 

var newTodo = {id: 0, description: 'fouth todo', done: false}
var obId = -2;
var markID = -3

var sortFunc = ""


// this is our initial todoList
//TEST VARIBLES


test('Example test', function(t) {
  // t.pass();
  var actual = "1";
  var expected = "1";
  t.equal(actual, expected, "SOS")
  t.end();
});

////current
test('generateId Tests', function(t){
  var actual = typeof(todoFunctions .generateId())
  var expected = 'number'
  t.equal(actual, expected, "It's a number!")
  t.end();
})

// test('cloneArrayOfObjects Tests', function(t){
//   var actual = todoFunctions.cloneArrayOfObjects();
//   var expected = [{df:"fd"},{rg:"eef"}];
//   t.equal(actual, expected, "yup")
//   t.end();
// })


// test('addTodo Tests', function(t){
//   var actual = (todoFunctions.addTodo()).length;
//   var expected = todoFunctions.cloneArrayOfObjects(state).length + 1;
//   t.equal(actual, expected, "New ToDo was added!")
//   t.equal(typeof(todoFunctions.cloneArrayOfObjects(state)), "Object", "returns a object")
// })
////////incoming
test('add to do test', function(t) {
  // t.pass();
  var actual = (todoFunctions.addTodo(state, newTodo)).length
  var expected = (todoFunctions.cloneArrayOfObjects(state)).length + 1
  t.equal(actual, expected, "Add Func: length should be equal")
  var actual1 = todoFunctions.addTodo(state, newTodo)
  var expected2 = "object";
  t.equal(typeof(actual1), expected2, "Add Func: should equal object")
  // t.equal((todoFunctions.addTodo(state, newTodo))[-1].id, (state[-1].id) +1, "Add func: new ID should be old ID +1")
  t.end();
})



test('delete to do test', function(t) {
  // t.pass();
  var actual = (todoFunctions.deleteTodo(state, obId)).length
  var expected = (todoFunctions.cloneArrayOfObjects(state)).length - 1
  t.equal(actual, expected, "Delete Func: length should be equal")
  var actual1 = todoFunctions.deleteTodo(state, newTodo)
  var expected2 = "object";
  t.equal(typeof(actual1), expected2, "Delete Func: should equal object")
  t.end();
})


test('mark item', function(t) {
  // t.pass();
  var actual = todoFunctions.markTodo(state, markID)[0].done;
  var expected = state[0].done
  t.equal(actual,expected,"mark Func: status should equal true")
  
  var actual1 = todoFunctions.markTodo(state, markID)
  var expected2 = "object";
  t.equal(typeof(actual1), expected2, "Mark Func: should equal object")
  t.end();
});

// test('sort items', function(t) {
//   // t.pass();
//   var actual = 
//   var expected = 
//   t.equal(actual,expected,"")
  
//   var actual1 = todoFunctions.sortTodo(state, sortFunc)
//   var expected2 = "object";
//   t.equal(typeof(actual1), expected2, "Sort Func: should equal object")
//   t.end();
// })


