import React, { useContext } from "react";
import { Button, Table } from "reactstrap";
import { TodoListContext } from "../contexts/TodoListContext";

function TodoList() {
  const { todoList, completeTodo, removeTodo } = useContext(TodoListContext);

  return (
    <Table>
      <tbody>
        {todoList &&
          todoList.map((todo, index) => (
            <tr key={index}>
              <th
                className="text-start"
                style={{
                  textDecoration: todo.isComplete ? "line-through" : "",
                }}
              >
                {todo.text}
              </th>
              <td className="text-end">
                <Button
                  color={todo.isComplete ? "secondary" : "success"}
                  className="me-2"
                  onClick={() => {
                    completeTodo(index);
                  }}
                >
                  {todo.isComplete ? "戻す" : "完了"}
                </Button>
                <Button color="danger" onClick={() => removeTodo(index)}>
                  削除
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TodoList;
