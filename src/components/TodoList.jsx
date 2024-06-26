import TodoItem from "./TodoItem";

export default function TodoList({ todoLists }) {
  return (
    <div>
      {todoLists.map((list, index) => (
        <section>
          <h2>{list.title}</h2>
          <ul>
            {list.items.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
