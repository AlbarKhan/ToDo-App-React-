export function TaskList({ tasklist, setTaskList }) {
  function handleToggle(id) {
    setTaskList((tasklist) =>
      tasklist.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }
  console.log(tasklist);
  function handleDelete(id) {
    setTaskList((tasklist) => {
      return tasklist.filter((task) => task.id !== id);
    });
  }

  return (
    <div className="taskList">
      {tasklist.length !== 0 ? (
        tasklist
          .map((task, index) => (
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
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                ></i>
              </div>
              <div className="task_content">{task.text}</div>
            </div>
          ))
          .reverse()
      ) : (
        <div>
          <center>
            <h2>NO TASK ADDED YET</h2>
          </center>
        </div>
      )}
    </div>
  );
}
