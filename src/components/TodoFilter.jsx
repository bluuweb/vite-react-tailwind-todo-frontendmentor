const TodoFilter = ({ updateFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600"
                            : "hover:text-gray-500"
                    }`}
                    onClick={() => updateFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600"
                            : "hover:text-gray-500"
                    }`}
                    onClick={() => updateFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600"
                            : "hover:text-gray-500"
                    }`}
                    onClick={() => updateFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
