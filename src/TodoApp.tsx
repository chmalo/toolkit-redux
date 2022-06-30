import {useGetTodosQuery} from "./store/apis";

export const TodoApp = () => {

    // @ts-ignore
    const {data: todos = [], isLoading} = useGetTodosQuery();
    console.log(todos, isLoading)


    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />

            <h4>IsLoading: {isLoading ? 'True' : 'False'}</h4>

            <pre>...</pre>
            <ul>
                {todos.map((todo: any) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'DONE ' : 'Pending '}</strong>
                        {todo.title}
                    </li>
                ))}
            </ul>


            <button>
                Next Todo
            </button>
        </>
    );
};