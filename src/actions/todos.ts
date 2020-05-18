import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
}

export interface FetchTodosSuccess {
  type: ActionTypes.FETCH_SUCCESS;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return {
    type: ActionTypes[0],
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
