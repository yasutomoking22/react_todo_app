// css in jsで書いてみる
const style = {
  height: "40px",
  width: "400px",
  backgroundColor: "goldenrod",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px "
};

// 変数名の規則に気を付けろ！
export const InputTodo = (props) => {
  const { input, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={input}
        onChange={onChange} //中身がかわった時
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
