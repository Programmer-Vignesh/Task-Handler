import { useState } from 'react';
import InputField from './components/InputField';
import { Todo } from './modules/Todos';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), task: todo, isCompleted: false }]);
      setTodo('');
    }
  };

  return (
    <>
      <h3>Task Handler</h3>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </>
  );
};

export default App;
