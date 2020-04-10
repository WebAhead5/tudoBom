// part 2 linking it all together
// The function here is called an iife [immediately Invoked Function Expression]
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var savedSort = []

  var state = [
    { id: 1, description: 'Morning Cofee', done: true },
    { id: 2, description: 'Learn Node.js', done: false },
    { id: 3, description: 'Clean the house', done: false },
    { id: 4, description: 'Phone Mum', done: false },
    { id: 5, description: 'Wake up in time for Class', done: true },
    { id: 6, description: 'Self Isolate', done: true },
    { id: 7, description: 'Master coding', done: false },
  ];

  // CREATE NODES & SPANS ################################################

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');

    // add span holding description
    var todoSpan = document.createElement("SPAN");
    todoSpan.textContent = todo.description;
    console.log(todoNode)
    if (todo.done == true) {
      todoSpan.className = "checked";
      document.getElementById("box1").innerHTML += `<spam>${todo.description}</spam>`
    }
    else {
      todoSpan.className = "notchecked";
      document.getElementById("box2").innerHTML += `<spam1>${todo.description}</spam1>`
    }

    todoNode.appendChild(todoSpan);


    // DELETE BUTTON ################################################

    // this adds the delete button
    var deleteButtonNode = document.createElement('icon');
    deleteButtonNode.innerHTML = '<i class="fas fa-times-circle icon"></i>'
    deleteButtonNode.addEventListener('click', function (event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);



      update(newState);
      console.log("del button clicked")

      var updateSort = savedSort.filter(x => {
        console.log("current id", x.id, "id to delete", todo.id)
        return x.id !== todo.id;
      })
      savedSort = updateSort;
      printSort(updateSort)

    });
    todoNode.appendChild(deleteButtonNode);


    // MARK TODO FUNC ############################################

    // add markTodo button
    todoSpan.parentNode.addEventListener('click', function (e) {
      console.log(todo.id, todo.done)
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    })

    return todoNode;
  };


  // ADD TODO FUNCTION ###############################################
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      event.preventDefault()
      var description = document.getElementById("todoInput").value
      var newState = todoFunctions.addTodo(state, scription)

      update(newState);
      document.getElementById("todoInput").value = ""
    });
  }

  // SORT FUNCTIONS ####################################################

  document.getElementById("numBtn").addEventListener('click', function () {
    var numSort = function (a, b) { return a.id - b.id }
    sortedArr = todoFunctions.sortTodos(state, numSort)
    savedSort = sortedArr;
    printSort(sortedArr)
  })

  document.getElementById("alphaBtn").addEventListener('click', function () {
    var alphaSort = function (A, B) {
      let a = A.description.toLowerCase()
      let b = B.description.toLowerCase()
      return a < b ? -1 :
        a > b ? 1 :
          0
    }
    sortedArr = todoFunctions.sortTodos(state, alphaSort)
    savedSort = sortedArr;
    printSort(sortedArr)
  })

  // document.getElementById("dateBtn").addEventListener('click', function() { 
  //     var dateSort = function(a, b) {return a.added - b.added}
  //     var newState = todoFunctions.sortTodos(state, dateSort)
  //     update(newState);
  //     })


  function printSort(arr) {

    document.getElementById("sorted").innerHTML = ""
    arr.forEach(x => {
      document.getElementById("sorted").innerHTML += `<spam3>#${x.id} Task: ${x.description}</spam3>`
    })

  }

  // DEFAULT CODE ####################################################

  // you should not need to change this function
  var update = function (newState) {
    document.getElementById("box1").innerHTML = ``;
    document.getElementById("box2").innerHTML = ``;
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function (state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);



})();