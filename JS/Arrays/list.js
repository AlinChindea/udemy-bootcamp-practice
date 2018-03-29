const todos = ['Buy new bunny'];
window.setTimeout(function() {
  let input   = prompt('What would you like to do?');
  while(input !== 'quit') {
    //handle input
    if(input === 'list') {
      listTodos();
    } else if(input === 'new') {
      addTodo();
    } else if(input === 'delete') {
      deleteTodo();
    }
    //ask again for new input
    input = prompt('What would you like to do?');
  }
  console.log('ok, you quit the app');
}, 500);

function listTodos() {
  console.log('**********');
  todos.forEach(function(todo, index){
    console.log(index + ': ' + todo);
  });
  console.log('**********');
}

function addTodo() {
  //ask for new todo
  const newTodo = prompt('Enter new todo');
  //add to todos array
  todos.push(newTodo);
  console.log('Added todo');
}

function deleteTodo() {
  //ask for index of todo to be deleted
  const index = prompt('Enter index of todo to delete');
  //delete that todo using splice()
  todos.splice(index,1);
  console.log('Deleted Todo');
}
