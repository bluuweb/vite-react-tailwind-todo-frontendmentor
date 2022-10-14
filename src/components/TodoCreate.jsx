import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) return setTodo("");
        createTodo(todo);
        setTodo("");
    };

    return (
        <form
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4"
            onSubmit={handleSubmit}
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="w-full text-gray-400 outline-none"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
