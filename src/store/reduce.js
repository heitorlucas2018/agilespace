export default (state = {}, action) => {
        console.log('Reduce => ',state,action);
    switch (action.type) {
        case 'hello':
            return action.payload;
        default:
            return state;
    }
}