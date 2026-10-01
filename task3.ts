// Написать функции loadTodos, которая принимает массив todo и возвращает массив id, если же запрос упал, тогда возвращает null

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function loadTodo(num: number): Promise<Todo | null> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);

  if (data.ok) {
    const result: Todo = await data.json();

    return result;
  }
  return null;
}
async function loadTodos(todos: number[]) {
  const promises = todos.map((id) => loadTodo(id));
  const results = await Promise.all(promises);
  return results.map((todo) => {
    if (todo === null) {
      return null;
    }
    return todo.id;
  });
}
loadTodos([1, 2, 3]).then((result) => console.log(result));

// loadTodos([1, 2, 3]).then((result) => console.log(result)); // [1, 2, 3] или [1, null, 3]
