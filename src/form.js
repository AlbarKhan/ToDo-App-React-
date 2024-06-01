import { useEffect, useState } from "react";

export function Form({ tasklist, setTaskList }) {
  const [inputTask, setInput] = useState("");
  const [newTAskMEsage, setnewTaskMessage] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();

    if (!inputTask) {
      alert("Input is empty");
      return;
    }
    const newObj = {
      text: inputTask,
      checked: false,
      id: Date.now(),
    };
    setTaskList([...tasklist, newObj]);
    setnewTaskMessage(true);
    setTimeout(() => {
      setnewTaskMessage(false);
    }, 3000);
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(tasklist));
  });
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <textarea
        placeholder="Enter Task"
        rows={8}
        value={inputTask}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button type="submit">Enter</button>
      {newTAskMEsage ? (
        <div className="newTaskMEssage">NEW TASK ADDED</div>
      ) : (
        <div></div>
      )}
    </form>
  );
}
