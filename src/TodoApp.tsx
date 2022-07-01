import {useGetTodoByIdQuery, useGetTodosQuery} from "./store/apis";
import {useState} from "react";

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    // @ts-ignore
    // const {data: todos = [], isLoading} = useGetTodosQuery();
    const {data: todo, isLoading} = useGetTodoByIdQuery(todoId);

    const nexTodo = () => {
        setTodoId(todoId + 1)
    }

    const prevTodo = () => {
        setTodoId(todoId - 1)
    }


    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>IsLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>
            {/*<ul>*/}
            {/*    {todos.map((todo: any) => (*/}
            {/*        <li key={todo.id}>*/}
            {/*            <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>*/}
            {/*            {todo.title}*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}


            <button onClick={prevTodo}>
                Prev Todo
            </button>

            <button onClick={nexTodo}>
                Next Todo
            </button>
        </>
    );
};