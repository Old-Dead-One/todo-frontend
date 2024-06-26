import Header from "./components/Header";
import TodoList from "./components/TodoList";

const todoLists = [
  {
    title: "List One",
    items: [
      { text: "Item 1", completed: false },
      { text: "Item 2", completed: true },
      { text: "Item 3", completed: false },
    ],
  },
  {
    title: "List Two",
    items: [
      { text: "Item 1", completed: true },
      { text: "Item 2", completed: true },
      { text: "Item 3", completed: false },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList todoLists={todoLists} />
    </div>
  );
}

export default App;
