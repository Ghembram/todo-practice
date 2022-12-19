export const Todo = (props) => {
  const { todos } = props;
  const DeleteList = () => {};

  return (
    <ul>
      {todos &&
        todos.map((items, index) => (
          <>
            <li key={index}>{items}</li>
            <button onClick={DeleteList}>delete</button>
          </>
        ))}
    </ul>
  );
};
