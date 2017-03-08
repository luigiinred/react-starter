import {
    delay
} from 'redux-saga'
import {
    put,
    takeEvery
} from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield delay(1000)
    yield put({
        type: 'LOGIN_SUCCESS',
        data: {}
    })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchAuth() {
    yield takeEvery('LOGIN_REQUEST', incrementAsync)
}