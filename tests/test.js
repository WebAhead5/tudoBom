var test = require('tape');
// var tapSpec = require('tap-spec');
var todoFunctions = require('../scripts/logic');
// import {  } from "module";

test('Example test', function(t) {
  // t.pass();
  var actual = "1";
  var expected = "1";
  t.equal(actual, expected, "SOS")
  t.end();
});

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


test('addTodo Tests', function(t){
  var actual = (todoFunctions.addTodo()).length;
  var expected = todoFunctions.cloneArrayOfObjects(state).length + 1;
  t.equal(actual, expected, "New ToDo was added!")
  t.equal(typeof(todoFunctions.cloneArrayOfObjects(state)), "Object", "returns a object")
  
  t.end();
})


// var addingToDo = fucntion(){
//   if(todoFunctions.cloneArrayOfObjects([-1].id) === todoFunctions.generateId()){
//     return true;
//   } else {
//     return false;
//   }
// }