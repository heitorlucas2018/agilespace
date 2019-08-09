export default (state = {}, action) => {
    console.log('action => ');
    switch (action.type) {
        case 'hello':
            return action.payload;
        default:
            return state;
    }
}