import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from '../actions'
import { StoreState } from '../reducers'

const _App: React.FC = () => {

  const [fetching, setFetching] = React.useState(false)

  const { todos } = useSelector((state: StoreState) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setFetching(false)
  }, []);

  const onButtonClick = (): void => {
    dispatch(fetchTodos())
    setFetching(true)
  }

  const onTodoClick = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const renderList = (): JSX.Element[] => {
    return todos.map((todo: Todo) => {
      return (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {fetching && 'LOADING'}
      {renderList()}
    </div>
  )
}

export const App = _App