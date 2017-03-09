const auth = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return state;
        case 'LOGIN_SUCCESS':
            console.log('Updating state?')
            return Object.assign({}, state, {
                axiosConfig: action.axiosConfig,
                user: action.data
            });
        default:
            return state;
    }
}

export default auth;