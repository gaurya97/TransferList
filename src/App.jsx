import { useState } from "react";
import "./styles.css";
const cell = (order) => {};

export default function App() {
  const data = ["first", "second", "third", "fourth"];

  const [listLeft, setListLeft] = useState(data);
  const [listRight, setListRight] = useState([]);
  const handleClick = (e, posistion) => {
    console.log(e.target.innerText);
    if (posistion == "left") {
      let newLeftList = listLeft.filter((e) => e != e.target.innerText);
    } else {
      let newRightList = listLeft.filter((e) => e != e.target.innerText);
    }
  };

  return (
    <div className="App">
      <div className="box">
        {listLeft.map((element, i) => {
          return (
            <div
              key={element}
              onClick={(e) => {
                handleClick(e, "left");
              }}
              className="button"
            >
              {element}
            </div>
          );
        })}
      </div>
      <div className="t-box">
        <button>left</button>
        <button>Right</button>
      </div>
      <div className="box">
        {listRight.map((element, i) => {
          return (
            <div
              key={element}
              onClick={(e) => {
                handleClick(e, "right");
              }}
              className="button"
            >
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
