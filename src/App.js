import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "reactstrap";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoListContextProvider from "./contexts/TodoListContext";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <TodoListContextProvider>
          <TodoForm />
          <TodoList />
        </TodoListContextProvider>
      </Container>
    </div>
  );
}

export default App;
