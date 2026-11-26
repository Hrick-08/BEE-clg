import { useState } from 'react'

const TodoApplication = () => {
    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (task.trim() === "") return
        const newTodo = {
            id: Date.now(),
            task: task,
            status: false
        }
        setTodos([...todos, newTodo])
        setTask("")
    }
    const handleDelete = (id) => {
        setTodos(todos.filter((el) => el.id !== id))
    }
    const handleComplete = (id) => {
        setTodos(todos.map((el) =>
            el.id === id ? { ...el, status: !el.status } : el
        ))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Enter todo."
                />

                <button type="submit">Submit</button>
            </form>

            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {todos.map((el) => {
                    return (
                        <div
                            onClick={() => handleComplete(el.id)}
                            style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center",
                                cursor: "pointer"
                            }}
                            key={el.id}
                        >
                            <h2 style={{
                                textDecoration: el.status ? "line-through" : "none",
                                textDecorationColor: el.status ? "red" : "inherit"
                            }}>
                                {el.task}
                            </h2>
                            <button onClick={(event) => {
                                event.stopPropagation()
                                handleDelete(el.id)
                            }}>
                                Delete
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TodoApplication