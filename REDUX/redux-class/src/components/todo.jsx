import { useSelector } from "react-redux";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return(
        <>
            <h3>TO-DO</h3>
            <ul>
            {todos.map((todo)=>(
                <li key={todos.id}>{todos.task}</li>
            ))}
            </ul>
        </>
    );
}