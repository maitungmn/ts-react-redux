import { FetchTodosSuccess, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  FETCH_SUCCESS = 'FETCH_SUCCESS',
}

export type Action = FetchTodosSuccess | DeleteTodoAction;
