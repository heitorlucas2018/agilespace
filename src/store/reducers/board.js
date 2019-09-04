export default (state = [], action = {}) => {
switch (action.type) {
    case 'ADD_DATA':
        return action;
    default:
        return state;
}
}