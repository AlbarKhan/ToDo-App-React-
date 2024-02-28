export function TaskList({ tasklist, setTaskList }) {
  function handleToggle(id) {
    setTaskList((tasklist) =>
      tasklist.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }
  function handleDelete(id) {
    setTaskList((tasklist) => {
      tasklist.filter((task) => task.id !== id);
    });
  }
  return (
    <div className="taskList">
      {tasklist.map((task, index) => (
        <div className="task" key={index}>
          <div className="task_head">
            <div>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={() => handleToggle(task.id)}
              ></input>
              <span>{task.checked ? "Completed" : "Pending"}</span>
            </div>
            <i
              className="fa-solid fa-trash"
              onClick={() => handleDelete(task.id)}
            ></i>
          </div>
          <div className="task_content">{task.text}</div>
        </div>
      ))}
    </div>
  );
}
