/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import { CheckList } from "./components/CheckList";
import { InputBox } from "./components/InputBox";
import { useState } from "react";

let toDoId = 1;
export interface ToDoInterFace {
  id: number;
  text: string;
  check: boolean;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDoInterFace[]>([]);
  console.log(toDoList);

  const onInsertToDo = (text: string) => {
    if (text === "") {
      return alert("텍스트를 입력하여 주세요");
    } else {
      const toDo: ToDoInterFace = {
        id: toDoId,
        text: text,
        check: false,
      };
      setToDoList((toDos) => toDos.concat(toDo));
      toDoId++;
    }
  };

  const onCheck = (id: number) => {
    setToDoList((toDos) =>
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, check: !toDo.check } : toDo
      )
    );
  };

  const onDelete = (id: number) => {
    setToDoList((toDos) => toDos.filter((toDo) => toDo.id !== id));
  };
  return (
    <div
      css={css`
        position: relative;
        width: 300px;
        height: 500px;
        border: 5px solid #000000;
      `}
    >
      <h1
        css={css`
          font-size: 30px;
        `}
      >
        To Do List
      </h1>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        `}
      >
        {/* 7개 이상 스크롤 */}
        {toDoList.map((v, i) => {
          return (
            <CheckList v={v} onCheck={onCheck} onDelete={onDelete} key={i} />
          );
        })}
      </div>
      <InputBox onInsertToDo={onInsertToDo} />
    </div>
  );
}

export default App;
