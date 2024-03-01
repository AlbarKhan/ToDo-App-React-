import { useState } from "react";

export function Form({ tasklist, setTaskList }) {
  const [inputTask, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputTask);

    if (!inputTask) return;
    const newObj = {
      text: inputTask,
      checked: false,
      id: Date.now(),
    };
    setTaskList([...tasklist, newObj]);
  }
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
    </form>
  );
}
