import "./App.css";
import { Header } from "./header";
import { Body } from "./body";
import { MainContent } from "./main-content";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Body>
        <MainContent />
      </Body>
    </div>
  );
}
