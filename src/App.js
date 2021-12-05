// import Counter from "./Components/Counter/Counter";
import Todo from "./Todo/Todo";
import "./styles.css";

export default function App() {
  console.log(`app changed`);
  return (
    <div className="App">
      {/* <Counter /> */}
      <Todo />
    </div>
  );
}
