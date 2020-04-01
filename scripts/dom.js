// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
    var state = [
      { id: -3, description: 'first todo', done: false, added: Date.now()},
      { id: 2, description: 'second todo', done: false, added: Date.now()},
      { id: -1, description: 'third todo', done: false, added: Date.now()},
      { id: -1, description: 'a todo', done: false, added: Date.now()},
      { id: 1, description: 'btodo', done: false, added: Date.now()},
    ]; // this is our initial todoList
  
    


    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');


      // add span holding description
      var todoSpan = document.createElement("SPAN");
      todoSpan.textContent = todo.description;
      if (todo.done == true) {
        todoSpan.className = "checked";
      }
      else {
        todoSpan.className = "notchecked";
      }
   
      todoNode.appendChild(todoSpan);

      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.innerHTML = "X"
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);
  

      // add markTodo button

      todoSpan.addEventListener('click', function(e) {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      })

    // sort function

    document.getElementById("numBtn").addEventListener('click', function() { 
      var numSort = function(a, b) {return a.id-b.id}
      var newState = todoFunctions.sortTodos(state, numSort)
      update(newState);
    })

    document.getElementById("alphaBtn").addEventListener('click', function() { 
      var alphaSort = function(A, B) {
        let a = A.description.toLowerCase()
        let b = B.description.toLowerCase()
        if(a < b ) return -1; 
        if(a > b ) return 1; 
        return 0; }
        var newState = todoFunctions.sortTodos(state, alphaSort)
        update(newState);
      })

    document.getElementById("dateBtn").addEventListener('click', function() { 
        var dateSort = function(a, b) {return a.added - b.added}
        var newState = todoFunctions.sortTodos(state, dateSort)
        update(newState);
        })

   
      // add classes for css
    console.log(state)
      return todoNode;
    };
  
    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        // what does event.preventDefault do?
        // what is inside event.target?

        event.preventDefault()

        var description = document.getElementById("todoInput").value
        console.log(description)
        var newState =  todoFunctions.addTodo(state, description)
  
        update(newState);

        document.getElementById("todoInput").value = ""
      });
    }
  
    // you should not need to change this function
    var update = function(newState) {
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul')
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });
  
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);
  })();