import { useState, useEffect } from 'react';
import axios from 'axios';

export const TodosList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/todos/list')
            .then((result) => {
                setTodos(result.data);
            })
    }, [todos]);

    return (
        <ul>
        {
            todos.map((todo, index) => (
                <li key={index}>{todo.content}</li>
            ))
        }
        </ul>
    )
}