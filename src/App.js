import "./App.css";
import { useState } from "react";
import { data } from "./data";
import { Header } from "./header";
import { Body } from "./body";
import { MainContent } from "./main-content";
import { TaskList } from "./task_list";
import { Form } from "./form";
export default function App() {
  const [tasklist, setTaskList] = useState(data);
  return (
    <div className="app">
      <Header />
      <Body>
        <MainContent>
          <TaskList tasklist={tasklist} setTaskList={setTaskList} />
          <Form tasklist={tasklist} setTaskList={setTaskList} />
        </MainContent>
      </Body>
    </div>
  );
}
