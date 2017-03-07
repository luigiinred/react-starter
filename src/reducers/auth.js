const auth = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return state;
        default:
            return state;
    }
}

export default auth;