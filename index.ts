import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((res) => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logReport(id, title, completed);
});

const logReport = (id: number, title: string, completed: boolean) => {
    const report = `Todo with ID ${id} has a title of ${title.toUpperCase()}. Is it completed: ${completed}`;
    console.log(report);
};
