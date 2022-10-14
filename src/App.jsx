// import bgMobileLight from "./assets/images/bg-mobile-light.jpg";
import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const todosInitialState = [
    { id: 1, text: "Complete online js curs in bluuweb", completed: true },
    { id: 2, text: "10 minutes meditation", completed: false },
    { id: 3, text: "Read for 1 hour", completed: false },
    { id: 4, text: "Pick up groceries", completed: false },
    { id: 5, text: "Complete Todo App on Frontend Mentor", completed: false },
];

const App = () => {
    const [todos, setTodos] = useState(todosInitialState);

    const updateTodo = (id) =>
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );

    const createTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    const countTodosLeft = () => todos.filter((todo) => !todo.completed).length;

    const clearCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");

    const updateFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />

                <TodoList
                    todos={filteredTodos()}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                />

                <TodoComputed
                    countTodosLeft={countTodosLeft}
                    clearCompletedTodos={clearCompletedTodos}
                />

                <TodoFilter updateFilter={updateFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center text-gray-600">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
