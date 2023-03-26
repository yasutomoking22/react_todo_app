import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { ImCompleteTodos } from "./components/ImCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  const [inputTodoText, setInputTodoText] = useState([""]);
  const [imCompleteTodos, setImcompleteTodos] = useState(["タスク1"]);
  const [completeTodos, setCompleteTodos] = useState(["タスク2"]);

  // inputが変更された時の処理
  const onChangeInputText = (event) => {
    setInputTodoText(event.target.value);
  };

  // 追加ボタンが押された時の処理
  const onClickAdd = () => {
    if (inputTodoText === "") return;
    const newTodos = [...imCompleteTodos, inputTodoText];
    setImcompleteTodos(newTodos);
    // 入力をリセット
    setInputTodoText("");
  };

  // 完了ボタンが押された時の処理
  const onClickComplete = (index) => {
    // 未完了タスクの配列変更
    const newIncompleteTodos = [...imCompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // 完了タスクの配列変更
    const newCompleteTodos = [...completeTodos, imCompleteTodos[index]];

    setImcompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 削除ボタンが押された時の処理
  const onClickDelete = (index) => {
    const newTodos = [...imCompleteTodos];
    newTodos.splice(index, 1); //配列から特定の要素を削除
    setImcompleteTodos(newTodos);
  };

  // 戻すボタンが押された時の処理
  const onClickBack = (index) => {
    // 完了タスクの配列変更
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1); //配列から特定の要素を削除

    // 未完了タスクの配列変更
    const newImcompleteTodos = [...imCompleteTodos, completeTodos[index]];

    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputTodo
        input={inputTodoText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
        disabled={imCompleteTodos.length >= 5} // true or falseを渡す
      />
      {imCompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるタスクは5個までです！タスクを消化してください！
        </p>
      )}
      <ImCompleteTodos
        imCompleteTodos={imCompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
