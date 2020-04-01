// part 2 linking it all together
// The function here is called an iife [immediately Invoked Function Expression]
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
    var state = [
      { id: -3, description: 'first todo', done: false},
      { id: -2, description: 'second todo', done: true},
      { id: -1, description: 'third todo', done: true },
    ]; // this is our initial todoList
  
    // This function takes a todo, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
      var todoNode = document.createElement('li');

      // add span holding description
      var todoSpan = document.createElement("SPAN");
      todoSpan.textContent = todo.description;
      console.log(todoNode)
      if (todo.done == true) {
        todoSpan.className = "checked";
      }
      else {
        todoSpan.className = "notchecked";
      }
        
      todoNode.appendChild(todoSpan);
        
    if (todo.done == true) {
     document.getElementById("box1").innerHTML += `<spam>${todo.description}</spam>`}else {
     document.getElementById("box2").innerHTML += `<spam1>${todo.description}</spam1>`
      }
       
      // this adds the delete button
      var deleteButtonNode = document.createElement('img');
      deleteButtonNode.src = "./imgs/x.png"
      deleteButtonNode.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(deleteButtonNode);
  

      // add markTodo button
      todoSpan.addEventListener('click', function(e) {
        console.log(todo.id, todo.done)
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      })
        
        

        
      // add classes for css
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
        var newState =  todoFunctions.addTodo(state, description)
  
        update(newState);
        document.getElementById("todoInput").value = ""
      });
    }
    {
    var sortButton = document.querySelector("sortButton");
    if(sortButton){
      sortButton.addEventListener('click', function(e) {
        e = todoFunctions.sortTodos
      })
    }
    }
  
    // you should not need to change this function
    var update = function(newState) {
      document.getElementById("box1").innerHTML = ``;
      document.getElementById("box2").innerHTML = ``;
      state = newState;
      renderState(state);
    };
  
    // you do not need to change this function
    var renderState = function(state) {
      var todoListNode = document.createElement('ul');
  
      state.forEach(function(todo) {
        todoListNode.appendChild(createTodoNode(todo));
      });
  
      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    };
  
    if (container) renderState(state);

    
    
  })();