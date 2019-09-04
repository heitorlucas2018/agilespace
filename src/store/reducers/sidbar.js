export default (state = {}, action) => {
    switch (action.type) {
        case 'hello':
            return action.payload;
        default:
            return state;
    }
}