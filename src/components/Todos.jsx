import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";
import { useState } from "react";

export function Todos() {
  const [list, setList] = useState([]);

  const handleList = (e, title, id) => {
    e.preventDefault();
    let obj = { title: title, status: false, id: id };
    setList([...list, obj]);
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((ele) => ele.id !== id);
    setList(updatedList);
  };

  const handleDone = (id) => {
    const upDatedList = list.map((ele) =>
      ele.id === id ? { ...ele, status: true } : ele
    );
    setList(upDatedList);
  };

  return (
    <div>
      <TodoInput handleList={handleList} />
      <TodoList
        list={list}
        handleDone={handleDone}
        handleDelete={handleDelete}
      />
    </div>
  );
}
