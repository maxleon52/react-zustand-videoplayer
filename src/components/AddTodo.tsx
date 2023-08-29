import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export default function AddTodo() {
  const [newTodo, setNewtodo] = useState("");

  // useDispatch: Usado para realizar alterações no estado (STORE)
  const dispatch = useDispatch();

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    dispatch(add({ newTodo }));

    setNewtodo("");
  }
  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Novo todo"
        value={newTodo}
        onChange={(e) => setNewtodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
