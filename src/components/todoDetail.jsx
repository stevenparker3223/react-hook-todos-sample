import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const TodoDetail = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/todos/detail/${id}`)
            .then((result) => {
                setTodo(result.data);
            })
    }, [id]);

    return (
        <div>
            <div>{todo.user}</div>
            <div>{todo.timestamp}</div>
            <div>{todo.content}</div>
        </div>
    )
}