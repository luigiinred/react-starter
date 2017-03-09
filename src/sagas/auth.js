import {
    delay
} from 'redux-saga'
import {
    call,
    put,
    takeEvery
} from 'redux-saga/effects'

import { login } from '../services/auth'

// Our worker Saga: will perform the async increment task
export function* tryLogin(data) {
    console.log(`foo ${data}`)
    try {
        const result = yield call(login, data);
        yield put({
            type: 'LOGIN_SUCCESS',
            axiosConfig: result.axiosConfig,
            data: result.data
        })
    } catch (error) {
        yield put({
            type: 'LOGIN_ERROR',
            data: {}
        })
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchAuth() {
    yield takeEvery('LOGIN_REQUEST', tryLogin)
}