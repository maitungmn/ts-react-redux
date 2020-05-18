import { call, put, takeLatest, all } from 'redux-saga/effects';
import { Todo, ActionTypes } from './actions';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

const fetchTodoWithProvider = async () => {
  const { data } = await axios.get<Todo[]>(url);
  return data;
};

function* handleFetch() {
  try {
    const res = yield call(fetchTodoWithProvider);
    yield put({ type: ActionTypes.FETCH_SUCCESS, payload: res });
  } catch (err) {
    console.error(err);
  }
}

function* watchFetchRequest() {
  yield takeLatest(ActionTypes[0], handleFetch);
}

const IndexSagas = function* () {
  yield all([watchFetchRequest()]);
};

export default IndexSagas;
