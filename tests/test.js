var test = require('tape');
// var tapSpec = require('tap-spec');
var todoFunctions = require('../scripts/logic');


//#####################################################################

//TEST VARIBLES
var state = [
  { id: 1, description: 'Morning Cofee', done: true},
  { id: 2, description: 'Learn Node.js', done: false},
  { id: 3, description: 'Clean the house', done: false},
  { id: 4, description: 'Phone Mum', done: false},
  { id: 5, description: 'Wake up in time for Class', done: true},
  { id: 6, description: 'Self Isolate', done: true},
  { id: 7, description: 'Master coding', done: false},
];

var newTodo = "new task to add"
var obId = 2;
var markID = 4


var numSort = function(a, b) {return a.id-b.id}


//#####################################################################


test('Example test', function(t) {
  // t.pass();
  var actual = "1";
  var expected = "1";
  t.equal(actual, expected, "test")
  t.end();
});

test('generateId Tests', function(t){
  var actual = typeof(todoFunctions.generateId())
  var expected = 'number'
  t.equal(actual, expected, "It's a number!")
  var actual = todoFunctions.generateId() //starts at 8
  var expected = 9;
  t.equal(actual, expected, "ID has incremented by 1 ")
  t.end();
})

test('cloneArrayOfObjects Tests', function(t){
  var actual = todoFunctions.cloneArrayOfObjects(state);
  var expected = state
  t.notEqual(actual, expected, "cloned object not the same as original object")
  var actual2 = todoFunctions.cloneArrayOfObjects(state);
  var expected2 = state
  t.deepEqual(actual2, expected2, "cloned object to equal original object in contents")
  t.end();
})



test('add to do test', function(t) {
  // t.pass();
  var actual = (todoFunctions.addTodo(state, newTodo)).length
  var expected = (todoFunctions.cloneArrayOfObjects(state)).length + 1
  t.equal(actual, expected, "Add Func: length should be equal to original +1")
  var actual1a = (todoFunctions.addTodo(state, newTodo)).slice(-1)[0].id // TEST FAILING - returning 10!?
  var expected1a = state.slice(-1)[0].id +4 // expected 11 given its been run 3 times in above code
  t.equal(actual1a, expected1a, "Add Func: last ID in array should be previous number +1")
  var actual1 = todoFunctions.addTodo(state, newTodo)
  var expected2 = "object";
  t.equal(typeof(actual1), expected2, "Add Func: type should equal object")
  var actual3 = todoFunctions.addTodo(state, newTodo);
  var expected3 = state
  t.notEqual(actual3, expected3, "Add Func: cloned object not the same as original object")
  t.end();
})


test('delete to do test', function(t) {
  // t.pass();
  var actual = (todoFunctions.deleteTodo(state, obId)).length
  var expected = (todoFunctions.cloneArrayOfObjects(state)).length - 1
  t.equal(actual, expected, "Delete Func: length should be equal to original minus 1")
  var actual1 = todoFunctions.deleteTodo(state, newTodo)
  var expected2 = "object";
  t.equal(typeof(actual1), expected2, "Delete Func: type should equal object")
  var actual3 = todoFunctions.deleteTodo(state, obId);
  var expected3 = state
  t.notEqual(actual3, expected3, "Delete Func: cloned object not the same as original object")
  t.end();
})


test('mark item', function(t) {
  // t.pass();
  var actual = todoFunctions.markTodo(state, markID)[3].done;
  var expected = !state[3].done //func run on 0, 0 changes
  t.equal(actual,expected,"mark Func: status should equal true (change status to original object)")
  var actual1a = todoFunctions.markTodo(state, markID)[3].done;
  var expected1a = true; //func run on 0, 0 changes
  t.equal(actual1a,expected1a,"mark Func: status should equal true (change status to true)")
  var actual1 = todoFunctions.markTodo(state, markID)[0].done;
  var expected1 = !state[1].done // func run on 0, 1 stays the same
  t.equal(actual1,expected1,"mark Func: status should equal false (no change to status)")
  var actual2 = todoFunctions.markTodo(state, markID)
  var expected2 = "object";
  t.equal(typeof(actual2), expected2, "Mark Func: type should equal object")
  var actual3 = todoFunctions.markTodo(state, markID);
  var expected3 = state
  t.notEqual(actual3, expected3, "Mark Func: cloned object not the same as original object")
  t.end();
});

test('sort items', function(t) {
  var actual1 = todoFunctions.sortTodos(state, numSort)
  var expected1 = "object";
  t.equal(typeof(actual1), expected1, "Sort Func: type should equal object")
  var actual2 = todoFunctions.sortTodos(state, numSort);
  var expected2 = state
  t.deepEqual(actual2, expected2, "Sort Func: contents the same as previous object, just in different order")
  var actual3 = todoFunctions.sortTodos(state, numSort);
  var expected3 = state
  t.notEqual(actual3, expected3, "Sort Func: cloned object not the same as original object")
  t.end();
})


