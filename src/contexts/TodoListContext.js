import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [todoList, setTodoList] = useState([]);

  // 追加されたtodoを表示する関数
  const addTodoList = (text) => {
    const newTodoList = [...todoList, { text, isComplete: false }];
    setTodoList(newTodoList);
  };

  // todoが削除された場合の関数
  const removeTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // 完了ボタンを押下したときの関数
  const completeTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].isComplete = !newTodoList[index].isComplete;
    setTodoList(newTodoList);
  };
  return (
    <TodoListContext.Provider
      value={{ todoList, addTodoList, removeTodo, completeTodo }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
