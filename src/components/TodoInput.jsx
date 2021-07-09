import style from "./TodoInput.module.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import style1 from "./TodoList.module.css";

export function TodoInput({ handleList }) {
  const [text, setText] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={text}
          placeholder="&#43;  Add-to-do"
          onChange={(e) => {
            setText(e.target.value);
          }}
          className={`${style.transparentBack} ${style.styleInput}`}
        />
        <button
          onClick={(event) => {
            let id = uuid();
            handleList(event, text, id);
            setText("");
          }}
          className={style1.buttonspacing}
        >
          Add
        </button>
      </form>
    </div>
  );
}
