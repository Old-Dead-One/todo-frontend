export default function TodoItem({ item }) {
  return (
    <li>
      <input type="checkbox" checked={item.completed} readOnly />
      <span>{item.text}</span>
    </li>
  );
}
