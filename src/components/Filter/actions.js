/**
 * Actions types 
 */
const btnadd  = 'hello';
export const btnview = 'hello';

/**
 * Actions creator 
 */
export const hello = (type = 'null',data={}) => {
        console.log('Action executed');
    return{
        type : type,
        payload: data
    }
}