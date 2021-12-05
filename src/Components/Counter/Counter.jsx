import { useState } from "react";
import Button from "../Button";
import Header from "../Header";
// import styles from "./button.module.css"

export default function Counter(props) {
  const [counter, setCounter] = useState(0);
  const styles = {
    padding: "1rem",
    width: "10rem",
    margin: "0.25rem"
  };
  const handleClick = (value) => {
    setCounter(counter + value);
  };
  return (
    <div className="App">
      <Header title={"Counter"} />
      <Header title={counter} />
      <Button style={styles} title="Add" onClick={() => handleClick(1)} />
      <Button style={styles} title="Reduce" onClick={() => handleClick(-1)} />
    </div>
  );
}
