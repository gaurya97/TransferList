import { useState } from "react";
import "./styles.css";
import { idText } from "typescript";
const cell = (order) => {};

export default function App() {
  const data = [
    { name: "first", cheaked: false, id: 1 },
    { name: "second", cheaked: false, id: 2 },
    { name: "third", cheaked: false, id: 3 },
    { name: "fourth", cheaked: false, id: 4 },
  ];

  const [listLeft, setListLeft] = useState([...data]);
  const [listRight, setListRight] = useState([]);

  const toggleList = (list, id, cheaked) => {
    return list.map((item) => {
      if (item.id == id) {
        return { ...item, cheaked: !cheaked };
      } else {
        return item;
      }
    });
  };

  const toggle = (list) => {
    return list.map((item) => {
      if (item.cheaked) {
        return { ...item, cheaked: !item.cheaked };
      } else {
        return item;
      }
    });
  };

  const handleClick = (id, checked, position) => {
    if (position == "left") {
      let copydata = [...listLeft];
      copydata = toggleList(copydata, id, checked);
      setListLeft(copydata);
    } else {
      let copydata = [...listRight];
      copydata = toggleList(copydata, id, checked);
      setListRight(copydata);
    }
  };

  return (
    <div className="App">
      <div className="box">
        {listLeft.map((element, i) => {
          return (
            <div
              key={element.name}
              onClick={(e) => handleClick(element.id, element.cheaked, "left")}
              className={element.cheaked ? "button border" : "button"}
            >
              {element.name}
            </div>
          );
        })}
      </div>
      <div className="t-box">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            let rightdata1 = listLeft.filter((el) => {
              return el.cheaked == true;
            });
            rightdata1 = toggle(rightdata1);

            let leftdata1 = listLeft.filter((el) => {
              return el.cheaked == false;
            });
            leftdata1 = toggle(leftdata1);

            let leftdata2 = listRight.filter((el) => {
              return el.cheaked == true;
            });
            leftdata2 = toggle(leftdata2);

            let rightdata2 = listRight.filter((el) => {
              return el.cheaked == false;
            });
            rightdata2 = toggle(rightdata2);
            setListLeft([...leftdata1, ...leftdata2]);
            setListRight([...rightdata1, ...rightdata2]);
          }}
        >
          Move
        </button>
      </div>
      <div className="box">
        {listRight.map((element, i) => {
          return (
            <div
              key={element.name}
              onClick={(e) => handleClick(element.id, element.cheaked, "right")}
              className={element.cheaked ? "button border" : "button"}
            >
              {element.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
