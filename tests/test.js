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
//EXAMPLE TEST

test('Example test', function(t) {
  // t.pass();
  var actual = "1";
  var expected = "1";
  t.equal(actual, expected, "test")
  t.end();
});

//#####################################################################
//GENRATE ID TESTS


//Testing that ID that is generated is a number
test('generateId Tests', function(t){
  var actual = typeof(todoFunctions.generateId()) // id moves from 7 to 8
  var expected = 'number'
  t.equal(actual, expected, "It's a number!")
  t.end();
})

//Testing that ID increments by 1 when it is generated
test('generateId Tests', function(t){
  var actual = todoFunctions.generateId() //id moves from 8 to 9
  var expected = 9;
  t.equal(actual, expected, "ID has incremented by 1 ")
  t.end();
})

//#####################################################################
//CLONE ARRAY TESTS


//Testing that the cloned object and original object are not the same object
test('cloneArrayOfObjects Tests', function(t){
  var actual = todoFunctions.cloneArrayOfObjects(state);
  var expected = state
  t.notEqual(actual, expected, "cloned object not the same as original object")
  t.end();
})

//Testing that even though the object is a clone, the values are the same as the original object
test('cloneArrayOfObjects Tests', function(t){
  var actual = todoFunctions.cloneArrayOfObjects(state);
  var expected = state
  t.deepEqual(actual, expected, "cloned object to equal original object in contents")
  t.end();
})

//#####################################################################
//ADD TO DO TESTS

//Testing that new object has +1 item than original item after add new item is run
test('add to do test', function(t) {
  var actual = (todoFunctions.addTodo(state, newTodo)).length //id moves from 9 to 10
  var expected = (todoFunctions.cloneArrayOfObjects(state)).length + 1
  t.equal(actual, expected, "Add Func: length should be equal to original +1")
  t.end();
})

//Testing that ID increments by 1 when new Object is created
test('add to do test', function(t) {
  var actual = (todoFunctions.addTodo(state, newTodo)).slice(-1)[0].id 
  var expected = state.slice(-1)[0].id +4 //id moves from 10 to 11 (original 7 plus 4 calls)
  t.equal(actual, expected, "Add Func: last ID in array should be previous number +1")
  t.end();
})

//Testing that function returns an object
test('add to do test', function(t) {
  var actual = todoFunctions.addTodo(state, newTodo)
  var expected = "object";
  t.equal(typeof(actual), expected, "Add Func: type should equal object (not equal)")
  t.end();
})

//Testing that the cloned object and original object are not the same object
test('add to do test', function(t) {
  var actual = todoFunctions.addTodo(state, newTodo);
  var expected = state
  t.notEqual(actual, expected, "Add Func: cloned object not the same as original object (is not equal)")
  t.end();
})


// test('unique id num', function(t){
//   var mf = 1;
//   var m = 0;
//   var item;
//   var actual = function checkUnique() {
//     for( let i = 1; i <= state.length; i++){
//       // state[i].id != state[i-1].id
//       for(var j=0; j<state.length; j++){
//         if(state[i].id == state[j].id)
//         m++;
//         if (mf<m){
//           mf = m ;
//           item = state[i].id;
//         }
//       }
//       m=0;
//   }
//   return mf;
// }
// var expected = "1";
// t.equal(actual, expected, "The max occurence should be 1")
// t.end()
// })

//#####################################################################
//DELETE TO DO TESTS


//Testing that new object is -1 shorter than original object
test('delete to do test', function(t) {
  var actual = (todoFunctions.deleteTodo(state, obId)).length
  var expected = (todoFunctions.cloneArrayOfObjects(state)).length - 1
  t.equal(actual, expected, "Delete Func: length should be equal to original minus 1")
  t.end();
})

//Testing function type returns Object
test('sort items', function(t) {
  var actual = todoFunctions.deleteTodo(state, newTodo)
  var expected = "object";
  t.equal(typeof(actual), expected, "Delete Func: type should equal object")
  t.end();
})

//Testing that the cloned object and original object are not the same object
test('sort items', function(t) {
  var actual = todoFunctions.deleteTodo(state, obId);
  var expected = state
  t.notEqual(actual, expected, "Delete Func: cloned object not the same as original object")
  t.end();
})


//#####################################################################
//MARK ITEM TESTS


//Testing that function changes the done status of the object
test('mark item', function(t) {
  var actual = todoFunctions.markTodo(state, markID)[3].done;
  var expected = !state[3].done 
  t.equal(actual,expected,"Mark Func: done status should equal true (has changed relative to itself)")
  t.end();
})

//Testing that function correctly changes value from false to true
test('mark item', function(t) {
  var actual = todoFunctions.markTodo(state, markID)[3].done;
  var expected = true; 
  t.equal(actual,expected,"Mark Func: done status should equal true (has changed from false to true)")
  t.end();
})

//Testing that when one object is changed, the other objects are not also changed
test('mark item', function(t) {
  var actual = todoFunctions.markTodo(state, markID)[0].done;
  var expected = !state[1].done 
  t.equal(actual,expected,"Mark Func: done status should equal false (no change)")
  t.end();
})

//Testing that function returns object
test('mark item', function(t) {
  var actual = todoFunctions.markTodo(state, markID)
  var expected = "object";
  t.equal(typeof(actual), expected, "Mark Func: type should equal object")
  t.end();
})

//Testing that the cloned object and original object are not the same object
test('mark item', function(t) {
  var actual = todoFunctions.markTodo(state, markID);
  var expected = state;
  t.notEqual(actual, expected, "Mark Func: cloned object not the same as original object")
  t.end();
});


//#####################################################################
//SORT ITEM TESTS


//Testing that function returns object
test('sort items', function(t) {
  var actual = todoFunctions.sortTodos(state, numSort)
  var expected = "object";
  t.equal(typeof(actual), expected, "Sort Func: type should equal object")
  t.end();
})


//Testing that although order is changed, the contents of the object are not altered 
test('sort items', function(t) { 
  var actual = todoFunctions.sortTodos(state, numSort);
  var expected = state
  t.deepEqual(actual, expected, "Sort Func: contents the same as previous object, just in different order")
  t.end();
})

//Testing that the cloned object and original object are not the same object
test('sort items', function(t) {
  var actual = todoFunctions.sortTodos(state, numSort);
  var expected = state
  t.notEqual(actual, expected, "Sort Func: cloned object not the same as original object")
  t.end();
})


//Testing that once sorted, the object at index 0 has a smaller ID than the object at index 1
test('sort items', function(t) {
  var actual = todoFunctions.sortTodos(state, numSort)[0].id < todoFunctions.sortTodos(state, numSort)[1].id;
  var expected = true;
  t.equal(actual, expected, "Sort Func: ID at index 0 is smaller than ID at index 1, expecting true")
  t.end();
})


//Testing that once sorted, the object at index 4 does NOT have a smaller id than the object at index 3.
test('sort items', function(t) {
  var actual = todoFunctions.sortTodos(state, numSort)[4].id < todoFunctions.sortTodos(state, numSort)[3].id;
  var expected = false;
  t.equal(actual, expected, "Sort Func: ID at index 3 is not smaller than than ID at index 4, expecting false")
  t.end();
})



//#####################################################################


