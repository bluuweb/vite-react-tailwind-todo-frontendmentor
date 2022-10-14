const TodoComputed = ({ countTodosLeft, clearCompletedTodos }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4">
            <span className="text-gray-400">{countTodosLeft()} items left</span>
            <button className="text-gray-400" onClick={clearCompletedTodos}>
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
