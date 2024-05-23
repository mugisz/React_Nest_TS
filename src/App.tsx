import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import TodosForm from "./components/ui/TodoForm/TodosForm";

function App() {
  return (
    <section className="App">
      <TodosForm />
    </section>
  );
}

export default App;
