import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((res) => {
    const todo = res.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    const report = `Todo with ID ${ID} has a title of ${title.toUpperCase()}. Is it completed: ${finished}`;

    console.log(report);
});
