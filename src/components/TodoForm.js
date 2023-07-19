import React, { useState, useContext } from "react";
import { Form, InputGroup, Input, Button } from "reactstrap";
import { TodoListContext } from "../contexts/TodoListContext";

function TodoForm() {
  const [value, setValue] = useState("");
  const { addTodoList } = useContext(TodoListContext);

  // 追加ボタンが押下された場合のハンドラー
  const handleSubmit = (e) => {
    e.preventDefault(); // これでページがリロードされないように制御する
    addTodoList(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" color="primary">
          追加
        </Button>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;
